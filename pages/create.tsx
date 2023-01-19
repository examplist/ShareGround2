import { useAuthStore, authStatus } from 'store/auth';
import Create from 'components/create/Create';
import * as s from 'styles/pages/write';

export default function profile() {
  const { id, status: currentAuthStatus } = useAuthStore();
  const userid = id ?? '';

  if (currentAuthStatus === authStatus.loading) {
    return <s.notConfirmed>로딩 중</s.notConfirmed>;
  }

  if (currentAuthStatus === authStatus.failed) {
    return (
      <s.canNotCreate id={'cannot-create'}>
        로그인을 하셔서 원하는 글을 작성해 보세요!
      </s.canNotCreate>
    );
  }

  if (currentAuthStatus === authStatus.fetched) {
    return (
      <s.confirmed>
        <Create userid={userid} />
      </s.confirmed>
    );
  }

  return <></>;
}
