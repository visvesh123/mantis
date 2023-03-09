import React, { useState } from "react";

import "../App.css";

import tableData2 from "./tableData2.json";

import { useSortableTable } from "./useSortableTable";

const columns = [
  { label: "Name", accessor: "name", sortable: true },
  { label: "Id", accessor: "country", sortable: true },

  { label: "Type", accessor: "money", sortable: true },
];
function Secondlist() {
  const [tableData, handleSorting] = useSortableTable(tableData2, columns);
  const [arri, setarri] = useState([]);
  var tb = [];
  const TableHead = ({ columns, handleSorting }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor) => {
      const sortOrder =
        accessor === sortField && order === "asc" ? "desc" : "asc";
      setSortField(accessor);
      setOrder(sortOrder);
      handleSorting(accessor, sortOrder);
    };

    return (
      <thead>
        <tr>
          {columns.map(({ label, accessor, sortable }) => {
            const cl = sortable
              ? sortField === accessor && order === "asc"
                ? "up"
                : sortField === accessor && order === "desc"
                ? "down"
                : "default"
              : "";
            return (
              <th
                key={accessor}
                onClick={sortable ? () => handleSortingChange(accessor) : null}
                className={cl}
              >
                {label}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <div class="row">
          <div class="col-sm" style={{ marginBottom: "40px" }}>
            <div class="custom-field second">
              <h6>
                <span>Sensor List</span>
              </h6>
              <div class="container">
                <div class="row">
                  <div
                    class="col-sm"
                    style={{ paddingLeft: "0px", paddingRight: "0px" }}
                  >
                    <div
                      className="table_container"
                      style={{ height: "200px" }}
                    >
                      <table className="table">
                        <TableHead {...{ columns, handleSorting }} />
                        <tbody style={{ overflowY: "scroll", height: "50px" }}>
                          {tableData.map((data) => {
                            return (
                              <>
                                <tr key={data.id}>
                                  {columns.map(({ accessor }) => {
                                    const tData = data[accessor]
                                      ? data[accessor]
                                      : "——";
                                    return <td key={accessor}>{tData}</td>;
                                  })}
                                  <td>
                                    <label class="checkbox-inline">
                                      <input
                                        type="checkbox"
                                        class="checkinp"
                                        value={data.id}
                                        onChange={(e) => {
                                          if (e.target.checked == true) {
                                            const valee = tableData.filter(
                                              (word) =>
                                                word.id == e.target.value
                                            );
                                            console.log(valee[0]);
                                            setarri([...arri, valee[0]]);

                                            console.log(arri);
                                          } else {
                                          }
                                        }}
                                      />
                                    </label>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="custom-field  first" style={{ marginTop: "20px" }}>
            <h6>
              <span>Display Filter</span>
            </h6>
            <div class="container">
              <div class="row">
                <div class="col-sm" style={{ paddingBottom: "15px" }}>
                  <select
                    class="custom-select"
                    id="inputGroupSelect02"
                    style={{ width: "100%", padddingBottom: "20px" }}
                  >
                    <option selected>Listed</option>
                    {arri.map((friend) => (
                      <option>
                        <div class="row">
                          <div class="col-sm">
                            <span style={{ paddingRight: "10px" }}>
                              {friend.name}
                            </span>
                          </div>
                        </div>
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Secondlist;
