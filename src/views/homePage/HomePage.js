import PokeCardContainer from "../../components/common/PokeCardContainer";
import NavBar2 from "../../components/layout/NavBar2" 
import PokeSearch from "../../components/common/PokeSearch";
import completeInfo from "../../components/hooks/PokeInfo";
const HomePage = () => {
  return ( 
    
    <div>
      <title>WikiPokedex</title>
      <link rel="website icon" type="png"
      href="assets/pokemon"></link>
      <NavBar2/>
      <PokeSearch/>
      <PokeCardContainer/>
     

    </div>
   );
}
 
export default HomePage;