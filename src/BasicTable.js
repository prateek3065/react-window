import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { Columns } from "./Columns";
import "./table.css";

export default function BasicTable() {
  const columns = useMemo(() => {
    return Columns;
  }, []);
  const data = useMemo(() => {
    return MOCK_DATA;
  }, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <>
      <table {...getTableProps()} className="table">
        <thead id="table-header">
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()} className="th">
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="td">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
