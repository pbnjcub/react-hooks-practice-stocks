import React, {useState} from "react";

function Stock({stock, onBuy, onSell }) {
const [isBought, setIsBought] = useState(false)

  function handleClick() {
    if(isBought === false) {
      onBuy(stock)
      setIsBought(isBought => !isBought)
    } else {
      onSell(stock)
      setIsBought(isBought => !isBought)
    }
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body" >
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

