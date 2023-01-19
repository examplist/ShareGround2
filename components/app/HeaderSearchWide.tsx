import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChangeSearch, Result, ClickResult } from 'components/app/HeaderSearh';
import * as s from 'styles/components/HeaderSearchWide';

interface Props {
  change$search: ChangeSearch;
  click$result: ClickResult;
  result: Result;
  searchValue: string;
}

interface ResultCompProps {
  result: Result;
  click$result: ClickResult;
}

function ResultComp({ click$result, result }: ResultCompProps) {
  const refResultContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refResultContainer.current) {
      refResultContainer.current.classList.add('visible');
    }
  }, []);

  return (
    <s.Result ref={refResultContainer} onClick={click$result} id="search-wide-result">
      {result.map(({ title, id }, index) => (
        <div key={index}>
          <Link href={`/article/${id}`}>{title}</Link>
        </div>
      ))}
    </s.Result>
  );
}

export default function HeaderSearchWide({
  result,
  change$search,
  click$result,
  searchValue,
}: Props) {
  return (
    <s.Container>
      <s.Search
        type={'text'}
        placeholder={'원하시는 콘텐츠의 제목을 입력하세요.'}
        onChange={change$search}
        value={searchValue}
        id="search-wide-input"
      />
      {searchValue === '' ? (
        <></>
      ) : (
        <ResultComp result={result} click$result={click$result} />
      )}
    </s.Container>
  );
}
