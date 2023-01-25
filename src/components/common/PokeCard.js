import { ApiGetRequest } from "../hooks/ApiGetRequest";
import '../../../src/Styles/ComponentsCss/PokeCard.scss';
import { colors } from "../../consts/PokeColors";
const PokeCard = ({Url}) => {


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
        <div className="card_external">
            
         {
         //Se analiza si ya Cargaron los datos traidos de la Api, de ser así, se imprimen
         loading
         ?
         // si no se han traido se muestra un mensaje por defecto
        <h2>Cargando carta</h2>
        :
        //si ya se trayeron se muestra:
        
            <div className="pokecard">
                <div className="card_header">
                    <h5 className="card_title">{data.name}</h5>
                </div>

                
                {/**Es como el cardbody, la imagen dentro de la carta */}
                
                <div className="card_body">
                    
                    <img className="card_bodyimg" src={data.sprites.front_default} alt="Pokemon"></img>
                
                    
                
                </div> 
                
                
                <div className="card_footer">
                    <p className="card_text"></p>
                    <ul className="list_container">
                {
                data.types.map((type,index)=> {
                    return(
                        <li style={{background:getColor(index)}} key={index} className="list_type">{type.type.name}</li>

                    )
                })
                }
                    </ul>
                </div>
            
            
                
            
                
                
                
            
            
            </div>
        
        }  
       
        </div>
     );
}
 
export default PokeCard;