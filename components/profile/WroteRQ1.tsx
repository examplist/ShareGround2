import { DocumentData } from 'firebase/firestore';
import { useAuthStore } from 'store/auth';
import { useEffect, useState, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import Card from 'components/Card';
import Loader from 'components/profile/Loader';
import * as s from 'styles/components/ProfileArticle';

interface Datum {
  id: string;
  info: DocumentData;
}

interface FetchArticlesParams {
  userid: string | null;
  pageParam: number;
  numOfUnit: number;
}

const fetchArticles = async ({ userid, pageParam, numOfUnit }: FetchArticlesParams) => {
  const { data } = await axios.get(
    `api/wrote?user=${userid}&count=${pageParam * numOfUnit}`
  );
  return data.articles;
};

export default function Wrote() {
  const numOfUnit = 4;
  const refLoader = useRef<HTMLDivElement>(null);
  const { id: userid } = useAuthStore();
  const [totalNum, setTotalNum] = useState<number>(100);

  useEffect(() => {
    (async () => {
      const resArticles = await fetch(`api/wrote?user=${userid}&count=${numOfUnit}`);
      if (resArticles.status !== 200) {
        alert('문제가 발생했습니다.');
      }
      const { totalCount } = await resArticles.json();
      setTotalNum(totalCount);
    })();
  }, []);

  const { data, fetchNextPage, hasNextPage, isError } = useInfiniteQuery(
    'wrote',
    ({ pageParam = 1 }) => fetchArticles({ userid, pageParam, numOfUnit }),
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log(allPages);
        if (allPages[0].length >= totalNum) {
          return undefined;
        }
        return Math.ceil(allPages[0].length / numOfUnit) + 1;
      },
    }
  );

  const fetchData = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(async (entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      fetchNextPage();
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(fetchData, {
      threshold: 0,
    });

    if (refLoader.current) {
      observer.observe(refLoader.current);
    }
  }, []);

  // JSX 리턴

  if (isError) {
    alert('문제가 발생했습니다!');
    return <></>;
  }

  if (!data) {
    return <></>;
  }

  // console.log(data);

  if (!hasNextPage) {
    return (
      <s.List>
        {data.pages[0].map((datum: Datum, index: number) => {
          return <Card datum={datum} key={index} />;
        })}
        <Loader ref={refLoader} isEnd={true} />
      </s.List>
    );
  }

  return (
    <s.List>
      {data.pages[0].map((datum: Datum, index: number) => {
        return <Card datum={datum} key={index} />;
      })}
      <Loader ref={refLoader} isEnd={false} />
    </s.List>
  );
}
