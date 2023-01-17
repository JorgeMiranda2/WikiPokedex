import React, { useState } from 'react';
import axios from "axios";

export function GetPokeInfo() {
const [completeInfo, setCompleteInfo] = useState();
/*let Url="https://pokeapi.co/api/v2/";
    axios.get(Url).then((response) => {
        console.log(response.data);
      setCompleteInfo(response.data);
    });
   
 */
    return completeInfo;
  }
