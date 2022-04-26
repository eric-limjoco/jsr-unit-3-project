import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, APP_ID, APP_KEY } from './globals';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {

  const [recipes, setRecipes] = useState([])
  const [term, setTerm] = useState('chicken')

  const getRecipes = async () => {
    const res = await axios.get(
      `${BASE_URL}&q=${term}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=high-protein`
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
        <label>Search for a recipe
          <input type="text" value={term} onChange={handleTermChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> 
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
