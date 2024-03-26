import React from "react";
import nbaLogo from "../assets/nba-logo.png";

const Header = ({ data, search, setSearch,sameTeam,setSameTeam }) => {
  const arrTeam = data.map((team) => team.team);
  // console.log(arrTeam);
  const filteredTeams = arrTeam.filter(
    (item, index) => arrTeam.indexOf(item) === index
  );
  filteredTeams.unshift("All Stars")
  // console.log(filteredTeams);
  return (
    <div className="header">
      <img src={nbaLogo} alt={nbaLogo} id="logo"/>
      <div>
        <h1>NBA Legends</h1>
        <input
          type="search"
          className="search"
          name="search"
          value={search}
          placeholder="Search Player..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="btnDiv">
        {filteredTeams.map((team) => (
          <button className="btns" key={team} onClick={() => setSameTeam(team)}>
            {team}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
