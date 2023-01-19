import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import * as s from 'styles/components/Paginate';

interface Props {
  category: string;
  pageCount: number;
  currentPage: number;
}
type Click$PageButton = (selectedItem: { selected: number }) => void;

export default function Paginate({ category, pageCount, currentPage }: Props) {
  const router = useRouter();

  const handlePageClick: Click$PageButton = (event) => {
    router.push(`/category/${category}/${event.selected + 1}`);
  };

  return (
    <s.Container id="category-page__paginate">
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        forcePage={currentPage - 1}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakLabel="..."
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        activeClassName={'active'}
        renderOnZeroPageCount={undefined}
      />
    </s.Container>
  );
}
