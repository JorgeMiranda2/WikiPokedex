import PokeCard from "./PokeCard.js";
import '../../../src/Styles/ComponentsCss/PokeCard.scss';
import {GetPokeInfo} from "../hooks/ApiGetRequest";
const PokeCardContainers = ({pokedata}) => {
    
    return ( 
        <div>
      
            {pokedata.map((pokemon)=>{

            return(
                <div>
         <PokeCard Url={pokemon.url}/>
      
     </div>
            );
         
            })}
        </div>
     );
}
 
export default PokeCardContainers;