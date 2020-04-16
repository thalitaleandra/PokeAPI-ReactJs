import React from 'react';
import './styles2.css';
function CardDetail({ pokemon }) {
  return (
    <div className="Card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
        <img src={pokemon.sprites.front_female} alt="" />
      </div>
      <div className="cardName">{pokemon.name}</div>
      <div className="cardInfo">
        <div className="cardAbility">
          <p className="title">Height: </p>
          <p>{pokemon.height}</p>
        </div>
        <div className="cardAbility">
          <p className="title"> Weight: </p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="cardAbility">
          <p className="title"> Order: </p>
          <p>{pokemon.base_experience}</p>
        </div>
        <div className="cardTypes">
          {pokemon.stats.map(stat => {
            return <div className="cardType">{stat.stat.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
