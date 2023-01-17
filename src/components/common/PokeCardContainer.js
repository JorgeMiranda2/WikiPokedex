import '../../../src/Styles/ComponentsCss/PokeCard.scss';
import PokeCard from "./PokeCard";
import {GetPokeInfo} from "../hooks/PokeInfo";
const PokeCardContainers = () => {
    const completeInfo = GetPokeInfo();
    return ( 
        <section class="carousel">
        <div class="carousel__container">
            <h2>{completeInfo}</h2>
            <PokeCard/>
        </div>
        </section>
        
     );
}
 
export default PokeCardContainers;