import { DocumentData } from 'firebase/firestore';
import { useAuthStore } from 'store/auth';
import { useEffect, useState, useRef } from 'react';
import { useQuery, useQueryClient } from 'react-query';
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
  currentNum: number;
}

const fetchArticles = async ({ userid, currentNum }: FetchArticlesParams) => {
  const { data } = await axios.get(`api/wrote?user=${userid}&count=${currentNum}`);
  return data.articles;
};

export default function Wrote() {
  const numOfUnit = 4;
  const refLoader = useRef<HTMLDivElement>(null);
  const { id: userid } = useAuthStore();
  const [totalNum, setTotalNum] = useState<number>(100);
  const [currentNum, setCurrentNum] = useState<number>(numOfUnit);

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

  const { data, isError, refetch, isSuccess } = useQuery(
    ['wrote', currentNum],
    () => fetchArticles({ userid, currentNum }),
    {}
  );

  const fetchData = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(async (entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      refetch();
      setCurrentNum(currentNum + numOfUnit);
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

  useEffect(() => {
    if (isSuccess) {
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

  if (data.length >= totalNum) {
    return (
      <s.List>
        {data.map((datum: Datum, index: number) => {
          return <Card datum={datum} key={index} />;
        })}
        <Loader ref={refLoader} isEnd={true} />
      </s.List>
    );
  }

  return (
    <s.List>
      {data.map((datum: Datum, index: number) => {
        return <Card datum={datum} key={index} />;
      })}
      <Loader ref={refLoader} isEnd={false} />
    </s.List>
  );
}
