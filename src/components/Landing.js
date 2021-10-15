import React, { useState, useEffect } from "react";

//api
import getcoins from "../services/api";
import Loading from './loading'
function Landing() {

    const [coins , setCoins]=useState([])

  useEffect(() => {
    const fetchapi = async () => {
      const data = await getcoins();
      console.log(data);
       setCoins(data)

    };

    fetchapi();
  }, []);

  return (
  <>
   
    <input type='text' placeholder='Search'/>
    <div>
      {   coins.length == 0 ? <Loading/> :
          coins.map(coin => <p key={coin.id}>{coin.id} <img src={coin.image} style={{width:'15px'}}/> {coin.current_price}</p>) 
      }
    </div>
  </>
  )
}

export default Landing;
