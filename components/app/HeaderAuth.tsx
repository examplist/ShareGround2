import { useSelector } from 'react-redux';
import { auth } from 'fb';
import { signOut } from 'firebase/auth';
import { AuthState, authStatus } from 'reducers/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as s from 'styles/components/HeaderAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

export default function HeaderAuth() {
  const { status: currentAuthStatus, photo } = useSelector(
    (state: AuthState) => state.auth
  );
  const userphoto = photo ?? '';
  const router = useRouter();
  const refLoginContent = useRef<HTMLDivElement>(null);

  const click$logout = async () => {
    // 이거 먼저 나와도 된다.
    // 이거 먼저 나오지 않으면 signOut이 될 동안 홈페이지로 가지 못한다.
    router.push('/');
    await signOut(auth);
  };

  const pointerdown$photo = () => {
    if (refLoginContent.current) {
      refLoginContent.current.classList.toggle('visible');
    }
  };

  const mouseenter$photo = () => {
    if (refLoginContent.current) {
      refLoginContent.current.classList.add('visible');
    }
  };

  const mouseleave$container = () => {
    if (refLoginContent.current) {
      refLoginContent.current.classList.remove('visible');
    }
  };

  const click$logincontent = () => {
    if (refLoginContent.current) {
      refLoginContent.current.classList.remove('visible');
    }
  };

  if (currentAuthStatus === authStatus.loading) {
    return (
      <s.Container>
        <s.Skeleton></s.Skeleton>
      </s.Container>
    );
  }

  if (currentAuthStatus === authStatus.failed) {
    return (
      <s.Container id="to-login">
        <s.Icon>
          <Link href={'/sign'}>
            <a>
              <FontAwesomeIcon icon={faUser} />
            </a>
          </Link>
        </s.Icon>
      </s.Container>
    );
  }

  if (currentAuthStatus === authStatus.fetched) {
    return (
      <s.Container onMouseLeave={mouseleave$container}>
        <s.Photo
          onPointerDown={pointerdown$photo}
          onMouseEnter={mouseenter$photo}
          id="to-profile"
        >
          <img src={userphoto} alt={'프로필 사진'} referrerPolicy={'no-referrer'} />
        </s.Photo>
        <s.LoginContent ref={refLoginContent} onClick={click$logincontent}>
          <s.LogoutButton>
            <button onClick={click$logout} id="log-out">
              로그아웃
            </button>
          </s.LogoutButton>
          <s.ToProfile>
            <Link href={'/profile'}>
              <a id="to-profile-button">프로필</a>
            </Link>
          </s.ToProfile>
        </s.LoginContent>
      </s.Container>
    );
  }

  return <></>;
}
