import "../../Styles/ComponentsCss/PokeCardContainer.css";
import PokeCard from "./PokeCard";

export const PokeCardContainers = ({results}) => {
    return ( 
        <div className="container">
         <ul>
            {
                results.map( p=>
                    <li>
                        <PokeCard url={p.url}/>
                    </li>
                    )
            }
         </ul>
           
            
            
        </div>
     );
}
 
export default PokeCardContainers;