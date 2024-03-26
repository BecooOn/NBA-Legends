import React from "react";
import PlayerCard from "./PlayerCard";
const CardContainer = ({ data, search, sameTeam }) => {
  const filteredPlayer = data.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase().trim())
  );
  //   console.log(sameTeam);
  const filteredTeam = data.filter((player) => player.team.includes(sameTeam));
  console.log(filteredTeam);
  return (
    <div className="card-container">
      {sameTeam === "All Stars"
        ? filteredPlayer.map((player, index) => (
            <PlayerCard key={index} player={player} sameTeam={sameTeam} />
          ))
        : filteredTeam.map((filteredTeam, index) => (
            <PlayerCard
              key={index}
              filteredTeam={filteredTeam}
              sameTeam={sameTeam}
            />
          ))}
    </div>
  );
};

export default CardContainer;
