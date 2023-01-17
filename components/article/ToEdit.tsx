import { useRouter } from 'next/router';
import * as s from 'styles/components/ToEdit';

export default function ToEdit({ articleid }: { articleid: string }) {
  const router = useRouter();

  const click$edit = () => {
    router.push(`/edit/${articleid}`);
  };

  return (
    <s.ToEdit onClick={click$edit} id="article__to-edit">
      수정
    </s.ToEdit>
  );
}
