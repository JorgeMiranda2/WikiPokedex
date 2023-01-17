import PokeCardContainer from "../../components/common/PokeCardContainer";
import NavBar from "../../components/layout/NavBar"; 
import PokeSearch from "../../components/common/PokeSearch";
import {GetPokeInfo} from "../../components/hooks/PokeInfo";


const HomePage = () => {

  const completeInfo = GetPokeInfo();
  return ( 
    <div>
      <NavBar/>
      <PokeSearch/>
      <PokeCardContainer/>
     

    </div>
   );
}
 
export default HomePage;