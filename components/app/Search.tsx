import { useSearchStore } from 'store/search';
import { useEffect } from 'react';

export default function Search() {
  const { add } = useSearchStore();

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/search');
      if (response.status === 200) {
        const { searchList } = await response.json();
        add(searchList);
      }
    })();
  }, []);

  return <></>;
}
