import PokeCard from "./PokeCard.js";
import '../../../src/Styles/ComponentsCss/PokeCardContainer.scss';
import {GetPokeInfo} from "../hooks/ApiGetRequest";
const PokeCardContainers = ({pokedata}) => {
    
    return ( 
        <div className="card-container">
      
            {pokedata.map((pokemon)=>{

            return(

                <div className="card-elements">
                    
                    <PokeCard Url={pokemon.url}/>
                    
                    
    
      
                </div>
            );
         
            })}
        </div>
        
     );
}
 
export default PokeCardContainers;