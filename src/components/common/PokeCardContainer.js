import PokeCard from "./PokeCard.js";
import '../../../src/Styles/ComponentsCss/PokeCardContainer.scss';
import React, { useEffect, useState } from 'react';
import { ApiGetRequest } from "../../components/hooks/ApiGetRequest";
const PokeCardContainers = () => {
   

    let sendData = {"--background-image":"linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255))"}
//Trayendo datos de la Api usando la Url
const [pokeLimit, setPokeLimit] = useState(20);
const [pokemonUrl, setPokemonUrl] = useState();
//?limit=100000&offset=0
let ResultInfo;
ResultInfo = ApiGetRequest(pokemonUrl);

useEffect(() => {
setPokemonUrl(`https://pokeapi.co/api/v2/pokemon?limit=${pokeLimit}&offset=0`)
},[pokeLimit])

    const RechargePoke = () => {
    setPokeLimit(pokeLimit+20);
    }

    return ( 
        <div>
      {
        ResultInfo.loading
          ?
          <h1>Cargando</h1>
          :
          <div>
<div className="card_container">
      
      {ResultInfo.data.results.map((pokemon)=>{
      return(

          <div style={sendData} className="card_elements">
              <PokeCard Url={pokemon.url}/>
          </div>
      );
   
      })}

{/*Boton para agregar mas pokemon */}
<button onClick={RechargePoke}>Submit</button>

  </div>
</div>
      }
      </div>
        
        
     );
}
 
export default PokeCardContainers;