import React, {useState} from "react";

function SearchBar({sortPortfolio, changeCategory}) {
  const [isCheckedAlpha, setIsCheckedAlpha] = useState(false)
  const [isCheckedPrice, setIsCheckedPrice] = useState(false)

  function onSortChange(e) {
    if(e.target.value === "Alphabetically") {
      setIsCheckedAlpha(true)
      setIsCheckedPrice(false)
      sortPortfolio(e.target.value)
    } else {
      setIsCheckedPrice(true)
      setIsCheckedAlpha(false)
      sortPortfolio(e.target.value)
    }
  }
  
  function onCategoryChange(e) {
    changeCategory(e.target.value)
  }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={isCheckedAlpha}
          onChange={onSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={isCheckedPrice}
          onChange={onSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={onCategoryChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
