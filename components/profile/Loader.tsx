import { forwardRef } from 'react';
import * as s from 'styles/components/Loader';

type Refs = HTMLDivElement;
type Props = { isEnd: boolean };

const Loader = forwardRef<Refs, Props>(({ isEnd }, reference) => {
  if (isEnd) {
    return (
      <s.Section>
        <s.End>모든 자료가 왔습니다.</s.End>
      </s.Section>
    );
  }

  return (
    <s.Section>
      <s.Loader ref={reference}>
        <s.L1></s.L1>
        <s.L2></s.L2>
        <s.L3></s.L3>
        <s.L4></s.L4>
      </s.Loader>
    </s.Section>
  );
});

export default Loader;
