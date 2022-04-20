import BasicTable from "./BasicTable";
import ReactWindowTable from "./ReactWindowTable";
import React, { useState } from "react";
function App() {
  const info =
    "React window works by only rendering part of a large data set (just enough to fill the viewport).";
  const [table, setTable] = useState(() => "ReactWindowTable");
  const switchTable = () => {
    setTable((previousState) => {
      if (previousState === "Basic Table") return "ReactWindowTable";
      return "Basic Table";
    });
  };
  return (
    <div style={{ width: "1150px" }}>
      <h3>{info}</h3>
      <h3>
        1. It reduces the amount of work (and time) required to render the
        initial view and to process updates.
      </h3>
      <h3>
        2. It reduces the memory footprint by avoiding over-allocation of DOM
        nodes.
      </h3>
      <p>
        You can notice that while switching to Basic Table it takes a lot time
        to render huge number of rows. You can also check the number of rows in
        the Element tab of the DevTools
      </p>
      <button onClick={switchTable}>
        Switch to{" "}
        {table === "Basic Table" ? "React Window Table" : "Basic Table"}
      </button>
      <div className="App" style={{ height: "500px", overflow: "scroll" }}>
        {table === "Basic Table" ? <BasicTable /> : <ReactWindowTable />}
      </div>
    </div>
  );
}

export default App;
