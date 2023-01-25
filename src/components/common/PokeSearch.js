import '../../Styles/ComponentsCss/PokeSearch.scss';
import axios from 'axios';
import React from "react";
import { searchPokemon } from '../../api';
const { useState } = React;

const PokeSearch = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState('');


  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    console.log(data);
  };




  return ( 
      <div>
        <section className="main">
        <h2 className="main__title">¿Qué Pokemon buscas?</h2>
        <div className="justify-content-center input-group">
        <input
          className="inputp"
          onChange={onChange}
          placeholder="Buscar... (Escribe el nombre del Pokemon)"
        />
        <button className="button-search" onClick={onClick}>
          <i className="bi-search"></i>
        </button>
        </div>
        
      </section>
      </div>
      
        );
}
export default PokeSearch;