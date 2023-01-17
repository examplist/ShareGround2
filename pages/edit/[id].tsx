import { useSelector } from 'react-redux';
import { AuthState } from 'reducers/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore';
import Edit from 'components/edit/Edit';
import * as s from 'styles/pages/write';

export default function () {
  const router = useRouter();
  const authState = useSelector((state: AuthState) => state.auth);
  const [article, setArticle] = useState<DocumentData | null | undefined>(undefined);
  const [articleid, setArticleid] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (router.query.id && typeof router.query.id !== 'object') {
        const resArticle = await fetch(`/api/articles?ar=${router.query.id}`);
        if (resArticle.status !== 200) {
          setArticle(null);
        } else {
          const data = await resArticle.json();
          setArticle(data);
          setArticleid(router.query.id);
        }
      }
    })();
  }, [router.isReady]);

  if (article === undefined) {
    return <s.notConfirmed>글을 가져오고 있습니다.</s.notConfirmed>;
  }

  if (article === null) {
    return <s.notConfirmed>해당 글이 존재하지 않습니다.</s.notConfirmed>;
  }

  if (article.userid !== authState.id) {
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
