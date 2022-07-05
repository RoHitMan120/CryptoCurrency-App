import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  price,
  symbol,
  priceChangePercentage,
  marketCap,
  priceChange,
  volume,
}) => {
  let pricechangePercentage = priceChangePercentage?.toFixed(2);

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="Crypto" />
          <h1>{name}</h1>
        </div>
        <div className="coin-data">
          <div className="price-percent">
            <div className="coin-price">Rs.{price}</div>
            <div className="percent">
              {pricechangePercentage < 0 ? (
                <div className="coin-percent red">{pricechangePercentage}%</div>
              ) : (
                <div className="coin-percent green">
                  {pricechangePercentage}%
                </div>
              )}
              <div className="price-of-percent">
                Rs.{priceChange.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="coin-marketcap">
            Market cap : Rs.{marketCap?.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
