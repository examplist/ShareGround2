import { DocumentData } from 'firebase/firestore';
import { useAuthStore } from 'store/auth';
import { useEffect, useState } from 'react';
import Edit from 'components/edit/Edit';
import * as s from 'styles/pages/write';

export default function ({ id: articleid }: { id: string }) {
  const { id: userid } = useAuthStore();
  const [article, setArticle] = useState<DocumentData | null | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const resArticle = await fetch(`/api/articles?ar=${articleid}`);
      if (resArticle.status !== 200) {
        setArticle(null);
      } else {
        const data = await resArticle.json();
        setArticle(data);
      }
    })();
  }, []);

  if (article === undefined) {
    return <s.notConfirmed>글을 가져오고 있습니다.</s.notConfirmed>;
  }

  if (article === null) {
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
