import ReactPaginate from "react-paginate";

const CustomPagination = ({
  totalPage = 0,
  handlePageClick,
  forcePage,
}: {
  totalPage: number;
  handlePageClick: (selected: number) => void;
  forcePage?: number;
}) => {
  return (
    <ReactPaginate
      className="flex justify-center w-full gap-[26px] text-[15px]  items-center mb-16 mt-16"
      nextLabel=">"
      onPageChange={(e) => handlePageClick(e.selected)}
      pageRangeDisplayed={5}
      pageCount={totalPage}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="font-bold"
      renderOnZeroPageCount={null}
      forcePage={forcePage}
    />
  );
};
export default CustomPagination;
