import { ApiGetRequest } from "../hooks/ApiGetRequest";
const PokeCard = ({Url}) => {


const {loading,data} = ApiGetRequest(Url);
console.log(data);
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
        <div>          
         <h2>{data.name}</h2>
            <img src={data.sprites.front_default}/>
            <ul>
            {data.types.map((type)=>{
                  return(
                     
                        <li>{type.type.name}</li>
                    
                         )
            })}
            </ul>

        </div>
        }  
        </div>
     );
}
 
export default PokeCard;