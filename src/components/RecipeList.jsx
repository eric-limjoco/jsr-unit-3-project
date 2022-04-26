import Recipe from "./Recipe"

const RecipeList = ({recipes}) => {
  return (
    <div className="recipe-grid">
      {
        recipes.map((r, i) => (
          <Recipe key={i} recipe={r} />
        ))
      }
    </div>
  )
}

export default RecipeList