import { useRouter } from 'next/router';
import { useArticleDelete } from 'hooks/article';
import * as s from 'styles/components/Delete';

interface Props {
  articleid: string;
  fileRef: string | null;
}

export default function Delete({ articleid, fileRef }: Props) {
  const router = useRouter();
  const { isError, isSuccess, mutate } = useArticleDelete();

  if (isError) {
    alert('죄송합니다. 삭제되지 않았습니다.');
  }

  if (isSuccess) {
    router.push('/article/deleted');
  }

  const click$delete = async () => {
    const answer = confirm('삭제하시겠습니까?');
    if (!answer) {
      return;
    }
    const file = fileRef ? fileRef : 'no';
    mutate({ id: articleid, file });
  };

  return (
    <s.Delete onClick={click$delete} id="article__delete">
      삭제
    </s.Delete>
  );
}
