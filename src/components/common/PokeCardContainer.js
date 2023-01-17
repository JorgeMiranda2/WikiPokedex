import PokeCard from "./PokeCard";
import {GetPokeInfo} from "../hooks/PokeInfo";
const PokeCardContainers = () => {
    const completeInfo = GetPokeInfo();
    return ( 
        <div>
            <h2>{completeInfo}</h2>
            <PokeCard/>
        </div>
     );
}
 
export default PokeCardContainers;