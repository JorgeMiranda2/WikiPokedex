import { set } from "lodash";
import FavoriteContext from "../layout/favoritesContext";
import React, { useContext, useState } from "react";
import Pagination from "./Pagination";
import Pokemon from "./PokeCard";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading, fetchPokemons } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  const { favoritePokemons } = useContext(FavoriteContext);

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  const showFavorites = () => {
   setIsFavorite(!isFavorite);
    isFavorite ? fetchPokemons(favoritePokemons): fetchPokemons();
    
  }

  return (
    <div>
      <div className="header">
       <h2><button onClick={() => showFavorites()}>Favoritos</button></h2>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div>Cargando pokemones...</div>
      ) : (
        <div>
          {pokemons.map((pokemon, idx) => {
            return (<Pokemon pokemon={pokemon} key={pokemon.name} />);
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
