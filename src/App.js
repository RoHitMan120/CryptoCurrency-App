import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

//Component
import Coin from "./Coin";
import Search from "./Search";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-app">
      <Search handleChange={handleChange} />

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            marketCap={coin.market_cap}
            priceChangePercentage={coin.price_change_percentage_24h}
            priceChange={coin.price_change_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
