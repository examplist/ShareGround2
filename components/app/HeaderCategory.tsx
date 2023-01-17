import Link from 'next/link';
import { KeyboardEventHandler, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faList } from '@fortawesome/free-solid-svg-icons';
import * as s from 'styles/components/HeaderCategory';

function TitleText() {
  return (
    <>
      <s.TitleNarrowText id="category-narrow__button">
        <FontAwesomeIcon icon={faList} />
      </s.TitleNarrowText>
      <s.TitleWideText>
        카테고리 <FontAwesomeIcon icon={faAngleDown} />
      </s.TitleWideText>
    </>
  );
}

export default function HeaderCategory() {
  const refCategories = useRef<HTMLDivElement>(null);

  const pointerdown$title = () => {
    if (refCategories.current) {
      refCategories.current.classList.toggle('visible');
    }
  };

  const keydown$title: KeyboardEventHandler = (e) => {
    if (e.key === 'Enter' && refCategories.current) {
      refCategories.current.classList.toggle('visible');
    }
  };

  const mouseenter$title = () => {
    if (refCategories.current) {
      refCategories.current.classList.add('visible');
    }
  };

  const mouseleave$container = () => {
    if (refCategories.current) {
      refCategories.current.classList.remove('visible');
    }
  };

  const click$categories = () => {
    if (refCategories.current) {
      refCategories.current.classList.remove('visible');
    }
  };

  return (
    <s.Container onMouseLeave={mouseleave$container} id="category-menu">
      <s.Title>
        <button
          onPointerDown={pointerdown$title}
          onMouseEnter={mouseenter$title}
          onKeyDown={keydown$title}
          id="category-menu__button"
        >
          <TitleText />
        </button>
      </s.Title>
      <s.Categories
        ref={refCategories}
        onClick={click$categories}
        id="category-menu__result"
      >
        <div>
          <Link href={'/category/society/1'}>사회</Link>
        </div>
        <div>
          <Link href={'/category/science/1'}>과학기술</Link>
        </div>
        <div>
          <Link href={'/category/culture/1'}>문화</Link>
        </div>
      </s.Categories>
    </s.Container>
  );
}
