import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, APP_ID, APP_KEY } from './globals';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {

  const [recipes, setRecipes] = useState([])
  const [term, setTerm] = useState('chicken')
  const [diet, setDiet] = useState('')

  const getRecipes = async () => {
    const res = await axios.get(
      `${BASE_URL}&q=${term}&app_id=${APP_ID}&app_key=${APP_KEY}${diet.length > 0 ?  `&diet=${diet}` : ''}`
    )
    console.log(res.data)
    setRecipes(res.data.hits.map(r => r.recipe))
  }

  useEffect(() => {
    getRecipes()
  }, [])

  const handleTermChange = (event) => {
    setTerm(event.target.value)
  }

  const handleDietChange = (event) => {
    setDiet(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    getRecipes()
  }

  return (
    <div className="App">
      <header>
        <h1>Recipe Finder</h1>
      </header>
      <form onSubmit={handleSearch} className="search">
        <label>Search for a recipe</label>
        <input type="text" value={term} onChange={handleTermChange} />
        <select value={diet} onChange={handleDietChange}>
            <option value="">All</option>
            <option value="high-protein">High Protein</option>
            <option value="high-fiber">High Fiber</option>
            <option value="low-carb">Low Carb</option>
            <option value="low-fat">Low Fat</option>
            <option value="low-sodium">Low Sodium</option>
            <option value="balanced">Balanced</option>
          </select>
        <input type="submit" value="Search" />
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
