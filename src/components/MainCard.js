import React from "react";
import Cards from "./Cards";

const MainCard = ({ cardInfo, deleteCard }) => {
  return (
    <div className="border-cards">
      <span className={`card-heading ${cardInfo.class}`}>{cardInfo.title}</span>
      {cardInfo.list.map((data, index) => {
        data.heading = cardInfo.title;
        return <Cards data={data} index={index} deleteCard={deleteCard} />;
      })}
    </div>
  );
};

// data = {title, description, prioroty, assigneename, team, heading = "progress"};

export default MainCard;
