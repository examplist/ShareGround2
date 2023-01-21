import { useAuthStore } from 'store/auth';
import getSsrApi from 'utils/getSsrApi';
import dateNumToStr from 'utils/dateNumToStr';
import { categoryEngToKor } from 'utils/convertCategoryLanguage';
import ToEdit from 'components/article/ToEdit';
// import Delete from 'components/article/Delete';
import Delete from 'components/article/DeleteRQ';
import InterestButton from 'components/article/InterestButton';
import CommentForm from 'components/article/CommentForm';
import Comments from 'components/article/Comments';
import * as s from 'styles/pages/article';
import { Context } from 'utils/typeContext';

export interface CommentType {
  id: string;
  content: string;
  date: number;
  writerid: string;
}

interface Article {
  id: string;
  userid: string;
  username: string;
  category: string;
  date: string;
  title: string;
  explanation: string;
  fileRef: string | null;
  fileURL: string | null;
  interestPeople: string[];
  comments: CommentType[];
}

interface Props {
  status: string;
  message: string;
  article: Article | null;
}

export default function ({ status, message, article }: Props) {
  const { id: currentUserid } = useAuthStore();

  if (status === 'error') {
    return <s.Error>{message}</s.Error>;
  }

  if (article === null) {
    return <></>;
  }

  return (
    <s.Content>
      <s.Section>
        <div id="article__category">카테고리: {article.category}</div>
        <div id="article__date">작성일: {article.date}</div>
        <div id="article__writer">작성자: {article.username}</div>
      </s.Section>
      <s.Title id={'article__title'}>{article.title}</s.Title>
      <hr />
      <s.Explanation id={'article__explanation'}>{article.explanation}</s.Explanation>
      {article.fileURL && (
        <s.File id={'article__file'}>
          <a href={article.fileURL}>파일 다운로드</a>
        </s.File>
      )}
      {currentUserid === article.userid && (
        <s.editDelete>
          <ToEdit articleid={article.id} />
          <Delete articleid={article.id} fileRef={article.fileRef} />
        </s.editDelete>
      )}
      {currentUserid && currentUserid !== article.userid && (
        <InterestButton
          articleid={article.id}
          currentUserid={currentUserid}
          interestPeople={article.interestPeople}
        />
      )}
      <s.commentTitle id={'article__comment-title'}>댓글</s.commentTitle>
      {currentUserid && <CommentForm writerid={currentUserid} articleid={article.id} />}
      <Comments
        articleid={article.id}
        comments={article.comments}
        currentUserid={currentUserid}
      />
    </s.Content>
  );
}

export async function getServerSideProps(context: Context) {
  const response = await fetch(`${getSsrApi(context)}/articles?ar=${context.query.id}`);

  if (response.status !== 200) {
    return {
      props: {
        status: 'error',
        message: '죄송합니다. 자료를 가져오지 못했습니다.',
        article: null,
      },
    };
  }

  const data = await response.json();

  const {
    userid,
    username,
    category,
    date,
    title,
    explanation,
    fileRef,
    fileURL,
    interestPeople,
    comments,
  } = data;

  const article = {
    id: context.query.id,
    userid,
    username,
    category: categoryEngToKor(category),
    date: dateNumToStr(date),
    title,
    explanation,
    fileRef,
    fileURL,
    interestPeople,
    comments,
  };

  return {
    props: {
      status: 'succeeded',
      message: '',
      article,
    },
  };
}
