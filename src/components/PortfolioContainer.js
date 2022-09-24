import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, onSell}) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myStocks.length === 0 ? null : myStocks.map(stock => (<Stock key={stock.id} stock={stock} onSell={onSell} />))
      }
    </div>
  );
}

export default PortfolioContainer;
