import React from "react";
import "../../styles.css";
import Navbar from "../../components/layout/NavBar";
import Searchbar from "../../components/common/SearchBar";
import Pokedex from "../../components/common/Pokedex";
import { getPokemonData, getPokemons, searchPokemon } from "../../api";
import { FavoriteProvider } from "../../components/layout/favoritesContext";
import Footer from "../../components/layout/Footer";
import { update } from "lodash";

const { useState, useEffect } = React;

const localStorageKey = "favorite_pokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  let ifData = [{}];
  const fetchPokemons = async (ifData) => {
    try {
     
      let promises;
      let data;
      setLoading(true);
      if(ifData){
        console.log("#1");
         promises = ifData.map(async (pokemon) => {
        
          return await getPokemonData(pokemon.url);
        });
      }else{
        console.log("#2");
        const data = await getPokemons(25, 25 * page);
        promises = data.results.map(async (pokemon) => {
         
          return await getPokemonData(pokemon.url);
        });
        setTotal(Math.ceil(data.count / 25));
      }
     
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      
      setNotFound(false);
   
    } catch (err) {}
  };

  const  compareFavorites = (favList, favName) => {
    const keys1 = Object.keys(favList);

    for (let key of keys1) {
      if (favList[key].name === favName) {
        return key;
      }
    }
    return -1;
  }

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const  updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const insertPoke = {name:name , url:`https://pokeapi.co/api/v2/pokemon/${name}/`};
    const isFavorite =  compareFavorites(updated, name);
    if (isFavorite >= 0) {
    
      updated.splice(isFavorite, 1);
    } else {
    
      updated.push(insertPoke);
    }
    setFavorites(updated);
 
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }}
    >
      <div className="div_container_global">
        <Navbar />
        <div className="App">
          <Searchbar onSearch={onSearch} />
          {notFound ? (
            <div className="not-found-text">
              No se encontro el Pokemon que buscabas 😭
            </div>
          ) : (
            <Pokedex
              loading={loading}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total}
              setPokemons = {setPokemons}
              favorites={favorites}
              fetchPokemons={fetchPokemons}
            />
          )}
        </div>
        <Footer />
      </div>
    </FavoriteProvider>
  );
}
