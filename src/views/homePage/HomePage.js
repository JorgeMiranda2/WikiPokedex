import PokeCardContainer from "../../components/common/PokeCardContainer";
import NavBar from "../../components/layout/NavBar"; 
import Footer from "../../components/layout/Footer"; 

import PokeSearch from "../../components/common/PokeSearch";
import React, { useEffect, useState } from 'react';
import { ApiGetRequest } from "../../components/hooks/ApiGetRequest";




const HomePage = () => {

  return (
    <div>
    <NavBar />
    <PokeSearch />
    <PokeCardContainer />
     <Footer/>
     
      
      
      
    </div>
    
  );
}
 
export default HomePage;