import React from "react";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { usePagination, useSortBy, useTable } from "react-table";

const TableHOC = ({ columns, data, containerClassname, heading, showPagination = false }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    pageCount,
    state: { pageIndex },
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 4 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className={containerClassname}>
      <h2 className="heading">{heading}</h2>

      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={column.id}>
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>
                      {column.isSortedDesc ? <AiOutlineSortDescending /> : <AiOutlineSortAscending />}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {showPagination && (
        <div className="table-pagination">
          <button disabled={!canPreviousPage} onClick={previousPage}>
            Prev
          </button>
          <span>{`${pageIndex + 1} of ${pageCount}`}</span>
          <button disabled={!canNextPage} onClick={nextPage}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TableHOC;
