import PokeCardContainer from "../../components/common/PokeCardContainer";
import NavBar from "../../components/layout/NavBar"; 
import Footer from "../../components/layout/Footer"; 

import PokeSearch from "../../components/common/PokeSearch";
import React, { useEffect, useState } from 'react';
import { ApiGetRequest } from "../../components/hooks/ApiGetRequest";




const HomePage = () => {
 
  //Trayendo datos de la Api usando la Url

const [pokeLimit, setPokeLimit] = useState(20);
const [pokemonUrl, setPokemonUrl] = useState();
//?limit=100000&offset=0
let ResultInfo;
ResultInfo = ApiGetRequest(pokemonUrl);

useEffect(() => {
setPokemonUrl(`https://pokeapi.co/api/v2/pokemon?limit=${pokeLimit}&offset=0`)
},[pokeLimit])


ResultInfo.loading?console.log("Cargando"):console.log(ResultInfo.data.results);

  return (
    <div>
      <NavBar />
      <PokeSearch />
      {
        ResultInfo.loading
          ?
          <h1>Cargando</h1>
          :
          <div>

            <PokeCardContainer setPokeLimit={setPokeLimit} pokeLimit={pokeLimit} pokedata={ResultInfo.data.results} />
          </div>
      }
      


      
      <div>
        <Footer/>
      </div>
      
      
      
    </div>
    
  );
}
 
export default HomePage;