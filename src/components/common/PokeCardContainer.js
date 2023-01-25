import PokeCard from "./PokeCard.js";
import '../../../src/Styles/ComponentsCss/PokeCardContainer.scss';
import {GetPokeInfo} from "../hooks/ApiGetRequest";
const PokeCardContainers = ({pokedata ,setPokeLimit, pokeLimit}) => {
    let sendData = {"--background-image":"linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255))"}

    const RechargePoke = () => {
    setPokeLimit(pokeLimit+20);
    }

    return ( 
        <div className="card_container">
      
            {pokedata.map((pokemon)=>{
            
            return(

                <div style={sendData} className="card_elements">
                    
                    <PokeCard Url={pokemon.url}/>
                   
                    
    
      
                </div>
            );
         
            })}
 
      <button onClick={RechargePoke}>Submit</button>
  
        </div>
        
     );
}
 
export default PokeCardContainers;