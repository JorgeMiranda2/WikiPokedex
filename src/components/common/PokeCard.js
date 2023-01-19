import { ApiGetRequest } from "../hooks/ApiGetRequest";
import '../../../src/Styles/ComponentsCss/PokeCard.scss';

const PokeCard = ({Url}) => {

    const colors = [
       {poketype:"fire",color:"#fd7d24"},
       {poketype:"water",color:"#4592c4"},
       {poketype:"grass",color:"#9bcc50"},
       {poketype:"bug",color:"#729f3f"},
       {poketype:"poison",color:"#b97fc9"},
       {poketype:"ice",color:"#3dd9ff"},
       {poketype:"normal",color:"#a4acaf"},
       {poketype:"flying",color:"#82baef"},
       {poketype:"ground",color:"#ab9842"},
       {poketype:"fighting",color:"#d56723"},
       {poketype:"psychic",color:"#f366b9"},
       {poketype:"electric",color:"#eed535"},
       {poketype:"steel",color:"#9eb7b8"},
       {poketype:"fairy",color:"#ef70ef"},
       {poketype:"rock",color:"#b0aa82"},
       {poketype:"dark",color:"#705848"},
       {poketype:"dragon",color:"#4f60e2"},
       {poketype:"ghost",color:"#703f70"},
       

    ]
     
    

const {loading,data} = ApiGetRequest(Url);
function getColor(slot){
    if(data!=null && slot !=null){
        let color = colors.find(element=>element.poketype=== data.types[slot].type.name);
        if(color!=null){
            
            return color.color;
        } else{
            console.log("Tipo no reconocido");
    }
    return "red";
}
}


    return ( 
        <div>
            
         {
         //Se analiza si ya Cargaron los datos traidos de la Api, de ser así, se imprimen
         loading
         ?
         // si no se han traido se muestra un mensaje por defecto
        <h2>Cargando carta</h2>
        :
        //si ya se trayeron se muestra:
       
       
        <div className="card" >
            <div className="card-header">
                <h5 className="card-title">{data.name}</h5>
            </div>

            <div>
            {/**Es como el cardbody, la imagen dentro de la carta */}
            <div className="pokemons">
            <div className="pokemon">
                <img className="pokemon-poster" src={data.sprites.front_default} alt="Pokemon"></img>
            
                
            </div> 
            </div> 
            </div>
            <div className="card-footer">
                <p className="card-text"></p>
                <ul>
            {
            
            data.types.map((type, index)=> {
                return(
                    <li style={{background:getColor(index)}} key={index}>{type.type.name}</li>

                )
            })
            }
            {console.log(data)}
                </ul>
            </div>
        
        
            
            
            
            
            
        
        
        </div>}
       
       
        </div>
     );
}
 
export default PokeCard;