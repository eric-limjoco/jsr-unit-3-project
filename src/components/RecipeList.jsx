const RecipeList = ({recipes}) => {
  return (
    <div>
      {
        recipes.map(r => (
          <div key={r.calories}>
            {r.label}
          </div>
        ))
      }
    </div>
  )
}

export default RecipeList