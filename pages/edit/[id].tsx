import { useAuthStore } from 'store/auth';
import { useArticleEditGetData } from 'hooks/article';
// import Edit from 'components/edit/Edit';
import Edit from 'components/edit/EditRQ';
import * as s from 'styles/pages/write';

export default function ({ id: articleid }: { id: string }) {
  const { id: userid } = useAuthStore();
  const { isLoading, isError, data: article } = useArticleEditGetData(articleid);

  if (isLoading) {
    return <s.notConfirmed>글을 가져오고 있습니다.</s.notConfirmed>;
  }

  if (isError) {
    return <s.notConfirmed>해당 글이 존재하지 않습니다.</s.notConfirmed>;
  }

  if (article.userid !== userid) {
    return (
      <s.editPageNoAuthor id={'edit-page__no-author'}>
        작성자만 글을 수정할 수 있습니다.
      </s.editPageNoAuthor>
    );
  }

  return (
    <s.confirmed>
      <Edit data={article} articleid={articleid} />
    </s.confirmed>
  );
}

export async function getServerSideProps(context: { query: { id: string } }) {
  return { props: { id: context.query.id } };
}
