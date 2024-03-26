import React, { useState } from "react";
import Header from "./components/Header";
import { data } from "./helper/data";
import "./App.css";
import CardContainer from "./components/CardContainer";

const App = () => {
    const [search, setSearch] = useState("");
    const [sameTeam, setSameTeam] = useState("All Stars");
  return (
    <div>
      <Header data={data} search={search} setSearch={setSearch} sameTeam={sameTeam} setSameTeam={setSameTeam}/>
      <CardContainer data={data} search={search} sameTeam={sameTeam}/>
    </div>
  );
};

export default App;
