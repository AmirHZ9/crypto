import React, { useState, useEffect } from "react";
//components
import Coin from "./Coin";
import styles from "../style/landing.module.css";
//api
import getcoins from "../services/api";
//gif
import Loading from "./loading";
function Landing() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchapi = async () => {
      const data = await getcoins();
      console.log(data);
      setCoins(data);
    };

    fetchapi();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchcoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={searchHandler}
      />
      <div className={styles.container}>
        {coins.length == 0 ? (
          <Loading />
        ) : (
          searchcoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              image={coin.image}
              price={coin.current_price}
              change={coin.price_change_percentage_24h}
              market_change = {coin.price_change_percentage_24h}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Landing;
