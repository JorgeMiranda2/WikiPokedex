import PokeCard from "./PokeCard.js";
import '../../../src/Styles/ComponentsCss/PokeCard.scss';
import {GetPokeInfo} from "../hooks/ApiGetRequest";
const PokeCardContainers = ({pokedata}) => {
    
    return ( 
        <div>
      
            {pokedata.map((pokemon)=>{

            return(
                <div>
                    <ul key={pokemon.name}>
                    <li><PokeCard Url={pokemon.url}/></li>
                    </ul>
    
      
     </div>
            );
         
            })}
        </div>
     );
}
 
export default PokeCardContainers;