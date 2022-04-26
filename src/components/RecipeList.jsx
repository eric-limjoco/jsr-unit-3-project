const RecipeList = ({recipes}) => {
  return (
    <div className="recipe-grid">
      {
        recipes.map(r => (
          <div key={r.calories.toString()} className="recipe">
            <img src={r.image} alt="food" />
            <h2>{r.label}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default RecipeList