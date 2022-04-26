import { useState } from "react"
import Ingredients from "./Ingredients"
const Recipe = ({recipe}) => {

  const [showIngredients, setShowIngredients] = useState(false)

  const toggleIngredients = () => { setShowIngredients(!showIngredients) }



  return (
    <div key={recipe.calories.toString()} className="recipe">
      <img src={recipe.image} alt="food" />
      <h2>{recipe.label}</h2>
      <button onClick={toggleIngredients}>{ showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}</button>
      { showIngredients ? <Ingredients ingredients={recipe.ingredients} /> : '' }
    </div>
  )
}

export default Recipe