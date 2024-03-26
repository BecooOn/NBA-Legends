import React, { useState } from "react";

const PlayerCard = ({ player, filteredTeam, sameTeam }) => {
  const [showStatistics, setShowStatistics] = useState(false);
  // console.log(filteredTeam);
  function handleShowStatistics() {
    setShowStatistics(!showStatistics);
  }
  return (
    <>
      {sameTeam !== "All Stars" ? (
        <div onClick={handleShowStatistics} className="card">
          {!showStatistics ? (
            <div className="img-container">
              <img src={filteredTeam.img} alt="" />
            </div>
          ) : (
            <ul className="statisticList">
              {filteredTeam.statistics.map((statistic, index) => (
                <li key={index}>{statistic}</li>
              ))}
            </ul>
          )}

          <h2 className="card-info">{filteredTeam.name}</h2>
          <h4 className="card-info-team">{filteredTeam.team}</h4>
        </div>
      ) : (
        <div onClick={handleShowStatistics} className="card">
          {!showStatistics ? (
            <div className="img-container">
              <img src={player.img} alt="" />
            </div>
          ) : (
            <ul className="statisticList">
              {player.statistics.map((statistic, index) => (
                <li key={index}>{statistic}</li>
              ))}
            </ul>
          )}

          <h2 className="card-info">{player.name}</h2>
          <h4 className="card-info-team">{player.team}</h4>
        </div>
      )}
    </>
  );
};

export default PlayerCard;
