import { useAuthStore, authStatus } from 'store/auth';
import { useState } from 'react';
import Account from 'components/profile/Account';
import Wrote from 'components/profile/Wrote';
// import Wrote from 'components/profile/WroteRQ1';
// import Wrote from 'components/profile/WroteRQ2';
import InterestList from 'components/profile/InterestList';
import * as s from 'styles/pages/profile';

function Exist() {
  const [category, setCategory] = useState<string>('account');

  function isChosen(thisCategory: string) {
    if (thisCategory === category) {
      return 'chosen';
    } else {
      return '';
    }
  }

  return (
    <s.ExistMain>
      <s.Choose>
        <button
          onClick={() => setCategory('account')}
          className={isChosen('account')}
          id="profile-button__account"
        >
          계정
        </button>
        <button
          onClick={() => setCategory('wrote')}
          className={isChosen('wrote')}
          id="profile-button__wrote"
        >
          작성
        </button>
        <button
          onClick={() => setCategory('interest')}
          className={isChosen('interest')}
          id="profile-button__interest"
        >
          관심
        </button>
      </s.Choose>
      {category === 'account' && <Account />}
      {category === 'wrote' && <Wrote />}
      {category === 'interest' && <InterestList />}
    </s.ExistMain>
  );
}

export default function profile() {
  const { status: currentAuthStatus } = useAuthStore();

  if (currentAuthStatus === authStatus.loading) {
    return <s.Loading>로딩 중</s.Loading>;
  }

  if (currentAuthStatus === authStatus.failed) {
    return (
      <s.AuthFailed>
        프로필 페이지입니다. 로그인을 하셔야 사용하실 수 있습니다.
      </s.AuthFailed>
    );
  }

  if (currentAuthStatus === authStatus.fetched) {
    return <Exist />;
  }

  return <></>;
}
