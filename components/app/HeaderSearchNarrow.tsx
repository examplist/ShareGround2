import Link from 'next/link';
import * as s from 'styles/components/HeaderSearchNarrow';
import { ChangeSearch, Result, ClickResult } from 'components/app/HeaderSearh';
import { useRef, forwardRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface Props {
  change$search: ChangeSearch;
  click$result: ClickResult;
  result: Result;
  searchValue: string;
}

type Refs = HTMLDivElement;
interface ResultCompProps {
  result: Result;
  click$result: ClickResult;
  elementSearch: HTMLInputElement | null;
}

const ResultComp = forwardRef<Refs, ResultCompProps>(
  ({ click$result: click$resultFromProp, result, elementSearch }, reference) => {
    const click$result: ClickResult = (e) => {
      click$resultFromProp(e);
      if (elementSearch) {
        elementSearch.classList.remove('visible');
      }
    };

    return (
      <s.Result
        className={'visible'}
        ref={reference}
        onClick={click$result}
        id="search-narrow__result"
      >
        {result.map(({ title, id }, index) => (
          <div key={index}>
            <Link href={`/article/${id}`}>{title}</Link>
          </div>
        ))}
      </s.Result>
    );
  }
);

export default function HeaderSearchNarrow({
  result,
  change$search,
  click$result,
  searchValue,
}: Props) {
  const refSearch = useRef<HTMLInputElement>(null);
  const refResultContainer = useRef<HTMLDivElement>(null);

  const click$button = () => {
    refSearch.current?.classList.toggle('visible');
    refResultContainer.current?.classList.toggle('visible');
  };

  useEffect(() => {
    window.addEventListener('pointerup', (e) => {
      // container도 여기서 처리하면 링크 이동이 안 됨

      // closest를 적용하기 위해서 다음과 같이 함
      const { target } = e;
      if (!(target instanceof Element)) {
        return;
      }
      // container가 평소에는 null이기 때문에
      // 평소에도 target.closest와 refResultContainer가 둘 다 null이므로 같음
      // 따라서 null이 아니라는 조건 추가
      if (
        target.closest('#search-narrow__result') === refResultContainer.current &&
        refResultContainer.current !== null
      ) {
        return;
      }
      if (target !== refSearch.current) {
        refSearch.current?.classList.remove('visible');
        refResultContainer.current?.classList.remove('visible');
      }
    });
  }, []);

  return (
    <s.Container id="search-narrow__container">
      <s.Button onClick={click$button} id="search-narrow__button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </s.Button>
      <s.Search
        type={'text'}
        placeholder={'원하시는 콘텐츠의 제목을 입력하세요.'}
        onChange={change$search}
        value={searchValue}
        ref={refSearch}
        id="search-narrow__input"
      />
      {searchValue === '' ? (
        <></>
      ) : (
        <ResultComp
          result={result}
          click$result={click$result}
          ref={refResultContainer}
          elementSearch={refSearch.current}
        />
      )}
    </s.Container>
  );
}
