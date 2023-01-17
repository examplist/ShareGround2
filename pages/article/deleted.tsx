import Link from 'next/link';
import * as s from 'styles/pages/article_deleted';

export default function deleted() {
  return (
    <s.Main id={'article-deletion-page'}>
      <s.Message>성공적으로 삭제되었습니다!</s.Message>
      <s.toHome>
        <Link href={'/'}>홈으로</Link>
      </s.toHome>
    </s.Main>
  );
}
