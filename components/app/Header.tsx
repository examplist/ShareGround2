import Link from 'next/link';
import HeaderCategory from 'components/app/HeaderCategory';
import HeaderSearh from 'components/app/HeaderSearh';
import HeaderAuth from 'components/app/HeaderAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import * as s from 'styles/components/Header';

export default function Header() {
  return (
    <s.Header>
      <s.Logo id={'header-logo'}>
        <Link href={'/'}>ShareGround</Link>
      </s.Logo>
      <s.Empty1></s.Empty1>
      <HeaderCategory />
      <s.Empty2></s.Empty2>
      <HeaderSearh />
      <s.Create>
        <Link href={'/create'}>
          <a id="to-create">
            <FontAwesomeIcon icon={faPen} />
          </a>
        </Link>
      </s.Create>
      <HeaderAuth />
    </s.Header>
  );
}
