import Welcome from 'components/home/Welcome';
import Intro from 'components/home/Intro';
import * as s from 'styles/pages/index';

export default function Home() {
  return (
    <s.Main id={'home'}>
      <Welcome />
      <Intro />
    </s.Main>
  );
}
