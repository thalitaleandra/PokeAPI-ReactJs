import React from 'react';
import './styles.css';
function Card({ pokemon }) {
  return (
    <div className="Card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="cardName">{pokemon.name}</div>
      <div className="cardTypes">
        {pokemon.types.map(type => {
          return <div className="cardType">{type.type.name}</div>;
        })}
      </div>
      <div className="cardInfo">
        <div className="cardAbility">
          <p className="title">Ability: </p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
        <a href="/detail">Detalhes</a>
      </div>
    </div>
  );
}

export default Card;
