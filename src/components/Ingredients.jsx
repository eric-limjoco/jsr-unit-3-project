const Ingredients = ({ingredients}) => {
  return (
    <ul className="ingredients-list">
      {
        ingredients.map((i, j) => (
          <li key={j} className="ingredient">
            {i.text}
          </li>
        ))
      }
    </ul>
  )
}

export default Ingredients