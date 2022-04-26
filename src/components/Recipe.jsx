import { useState } from "react"
import Ingredients from "./Ingredients"
const Recipe = ({recipe}) => {

  const [showIngredients, setShowIngredients] = useState(false)

  const toggleIngredients = () => { setShowIngredients(!showIngredients) }



  return (
    <div key={recipe.calories.toString()} className="recipe">
      <img src={recipe.image} alt="food" />
      <h2>{recipe.label}</h2>
      {
        recipe.dietLabels.map((d, i) => (
          <span key={i}>{d}</span>
        ))
      }
      <button onClick={toggleIngredients}>{ showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}</button>
      { showIngredients ? <Ingredients ingredients={recipe.ingredients} /> : '' }
      <div>
        <a href={recipe.url} target="_blank" rel="noreferrer">View full recipe</a>
      </div>
    </div>
  )
}

export default Recipe