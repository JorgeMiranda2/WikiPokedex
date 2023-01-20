import PokeCard from "./PokeCard.js";
import '../../../src/Styles/ComponentsCss/PokeCardContainer.scss';
import {GetPokeInfo} from "../hooks/ApiGetRequest";
const PokeCardContainers = ({pokedata}) => {
    
    return ( 
        <div className="card_container">
      
            {pokedata.map((pokemon)=>{
            
            return(

                <div className="card_elements">
                    
                    <PokeCard Url={pokemon.url}/>
                    
                    
    
      
                </div>
            );
         
            })}
        </div>
        
     );
}
 
export default PokeCardContainers;