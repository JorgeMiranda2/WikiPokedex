import PokeCardContainer from "../../components/common/PokeCardContainer";
import NavBar from "../../components/layout/NavBar"; 
import PokeSearch from "../../components/common/PokeSearch";
import React, { useEffect, useState } from 'react';
import { ApiGetRequest } from "../../components/hooks/ApiGetRequest";



const HomePage = () => {
  //Trayendo datos de la Api usando la Url
const [pokemonUrl, setPokemonUrl] = useState("https://pokeapi.co/api/v2/pokemon");
//?limit=100000&offset=0
const {loading,data} = ApiGetRequest(pokemonUrl);
loading?console.log("Cargando"):console.log(data.results);

  return ( 
    <div>
      <NavBar />
      <PokeSearch/>
      {
            loading
            ?
            <h1>Cargando</h1>
            :
            <div>
              
          <PokeCardContainer pokedata={data.results}/>
            </div>
          }

      
     

    </div>
   );
}
 
export default HomePage;