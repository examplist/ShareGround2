import { useAuthStore, authStatus } from 'store/auth';
import SignForm from 'components/sign/SignForm';
import * as s from 'styles/pages/sign';

export default function sign() {
  const { status: currentAuthStatus } = useAuthStore();

  if (currentAuthStatus === authStatus.loading) {
    return (
      <s.Main>
        <s.LoggedIn>로딩 중</s.LoggedIn>
      </s.Main>
    );
  }

  if (currentAuthStatus === authStatus.fetched) {
    return (
      <s.Main>
        <s.LoggedIn>이미 로그인을 하셨습니다.</s.LoggedIn>
      </s.Main>
    );
  }

  if (currentAuthStatus === authStatus.failed) {
    return (
      <s.Main>
        <SignForm />
      </s.Main>
    );
  }

  return <s.Main></s.Main>;
}
