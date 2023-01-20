import { ApiGetRequest } from "../hooks/ApiGetRequest";
import '../../../src/Styles/ComponentsCss/PokeCard.scss';

const PokeCard = ({Url}) => {


const {loading,data} = ApiGetRequest(Url);

    return ( 
        <div className="card-external">
            
         {
         //Se analiza si ya Cargaron los datos traidos de la Api, de ser así, se imprimen
         loading
         ?
         // si no se han traido se muestra un mensaje por defecto
        <h2>Cargando carta</h2>
        :
        //si ya se trayeron se muestra:
        
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">{data.name}</h5>
                </div>

                
                {/**Es como el cardbody, la imagen dentro de la carta */}
                
                <div className="card-body">
                    
                    <img className="card-bodyimg" src={data.sprites.front_default} alt="Pokemon"></img>
                
                    
                
                </div> 
                
                
                <div className="card-footer">
                    <p className="card-text"></p>
                    <ul className="list-container">
                {
                data.types.map((type)=> {
                    return(
                        <li className="list-type">{type.type.name}</li>

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