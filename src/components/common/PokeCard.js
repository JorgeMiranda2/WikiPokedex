import "../../Styles/ComponentsCss/PokeCard.css";
import charizar from "../../assets/charizardjpg.jpg";

const PokeCard = () => {
    return ( 
        <div className="card">
            <div className="card-header">
                <h5 className="card-title"></h5>
            </div>

            <div>
            {/**Es como el cardbody, la imagen dentro de la carta */}
            <ul className="pokemons">
            <li className="pokemon">
                <img className="pokemon-poster" src={charizar} alt="Pokemon"></img>
            
                
            </li> 
            </ul> 
            </div>
            <div className="card-footer">
                <p className="card-text"></p>

            </div>
        
        
            
            
            
            
            
        
        
        </div>
        
        
     );
}
 
export default PokeCard;