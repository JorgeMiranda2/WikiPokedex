import '../../../src/Styles/ComponentsCss/PokeCard.scss';
import pokemon from '../../assets/pokemon.png';

const PokeCard = () => {
    return ( 
        <div class="carousel-item">
                <img class="carousel-item__img" src={ pokemon } alt="Pokemon"></img>
                <div class="carousel-item__details">
                    <div>
                        <img src="../public/icons/icon-play.png" alt="Play Icon"></img>
                        <img src="../public/icons/icon-plus.png" alt="Plus Icon"></img>
                    </div>
                    <p class="carousel-item__details--title">POKEMON</p>
                    <p class="carousel-item__details--subtitle">Ta buenardo</p>
                </div>
            </div>
     );
}
 
export default PokeCard;