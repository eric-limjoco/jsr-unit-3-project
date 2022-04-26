import { useState } from "react"
import Ingredients from "./Ingredients"
const Recipe = ({recipe}) => {

  const [showIngredients, setShowIngredients] = useState(false)

  const toggleIngredients = () => { setShowIngredients(!showIngredients) }



  return (
    <div key={recipe.calories.toString()} className="recipe">
      <img src={recipe.image} alt="food" />
      <div className="diet-label-container">
      {
        recipe.dietLabels.map((d, i) => (
          <span key={i} className={`diet-label ${d}`}>{d}</span>
        ))
      }
      </div>
      <h2 className="recipe-label">{recipe.label}</h2>
      <div className="recipe-link">
        <a href={recipe.url} target="_blank" rel="noreferrer">View full recipe</a>
      </div>
      <div>
        <button className="toggle-ingredients" onClick={toggleIngredients}>{ showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}</button>
      </div>
      { showIngredients ? <Ingredients ingredients={recipe.ingredients} /> : '' }
    </div>
  )
}

export default Recipe