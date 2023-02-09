import React, { useContext } from "react";
import FavoriteContext from "../layout/favoritesContext";
import {colors} from "../../consts/PokeColors";
import '../../../src/Styles/ComponentsCss/PokeCard.scss';

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );

  const redHeart = "❤️";
  const blackHeart = "🖤";

  const favoriteEvaluate = (name) => {
    const keys = Object.keys(favoritePokemons);
    for(let key in keys){
      if(favoritePokemons[key].name===name){
        return redHeart;
      }
    }
    return blackHeart;
  }
  const heart = favoriteEvaluate(pokemon.name);

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  function getColor(slot){
    if(pokemon!=null && slot !=null){
        let color = colors.find(element=>element.poketype=== pokemon.types[slot].type.name);
        if(color!=null){
            
            return color.color;
        } else{
            console.log("Tipo no reconocido");
    }
    return "red";
}
}

  return (
    
      <div className="pokecard">
        <div className="card_header">
        <h3 className="card_title">{pokemon.name}</h3>   
        </div>

        <div className="card_body">
        <img className="card_bodyimg" src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div> 
          
          <div className="card_footer">
            <div className="pokemon_type">
              {pokemon.types.map((type, idx) => {
                return (
                  <div key={idx}>
                    
                    <li style={{background:getColor(idx), listStyle:"none"}} key={idx} className="list_type">{type.type.name}</li>
                  </div>
                  
                );
              })}
            </div>
            <button onClick={clickHeart} className="pokemon-heart-btn">
              <div className="pokemon-favorite">{heart}</div>
            </button>
          </div>
        
      </div>
    
  );
};

export default Pokemon;
