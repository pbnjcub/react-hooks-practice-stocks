import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [stocksToDisplay, setStocksToDisplay] = useState([])
  const [sortBy, setSortBy] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(resp => resp.json())
    .then(data => {
      setStocks(data)
      setStocksToDisplay(data)
    })
  }, [])

  function sortPortfolio(sortBy) {
    setSortBy(sortBy)
    const sortedStocks = stocks.sort((a, b) => {
      if(sortBy === "Price") {
        return (a.price > b.price) ? 1 : -1
      } else if(sortBy === "Alphabetically") {
        return (a.name > b.name) ? 1 : -1
      } else {
        return (a, b)
      }
    })
    setStocksToDisplay(sortedStocks)
  }

  function changeCategory(category) {
    const stocksByCategory = stocks.filter(stock => stock.type === category)
    setStocksToDisplay(stocksByCategory)
  }
    
  
  function addToPortfolio(boughtStock) {
    const updatedStocks = stocks.filter(stock => stock.id !== boughtStock.id)
    setStocksToDisplay(updatedStocks)
    setMyStocks([...myStocks, boughtStock])
    }

  function sellFromPortfolio(soldStock) {
    const updatedMyStocks = myStocks.filter(stock => stock.id !== soldStock.id)
    setStocksToDisplay([...stocksToDisplay, soldStock])
    setMyStocks([updatedMyStocks])
  }

  return (
    <div>
      <SearchBar sortPortfolio={sortPortfolio} changeCategory={changeCategory} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocksToDisplay={stocksToDisplay} onBuy={addToPortfolio}  />
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} onSell={sellFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

