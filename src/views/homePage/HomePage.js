import PokeCardContainer from "../../components/common/PokeCardContainer";
import NavBar from "../../components/layout/NavBar" 
import PokeSearch from "../../components/common/PokeSearch";
const HomePage = () => {
  return ( 
    <div>
      <NavBar/>
      <PokeSearch/>
      <PokeCardContainer/>

    </div>
   );
}
 
export default HomePage;