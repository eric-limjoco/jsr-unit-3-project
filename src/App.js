import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, APP_ID, APP_KEY } from './globals';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {

  const [recipes, setRecipes] = useState([])
  const [term, setTerm] = useState('chicken')

  useEffect(() => {
    const getRecipes = async () => {
      const res = await axios.get(
        `${BASE_URL}&q=${term}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=high-protein`
      )
      console.log(res.data)
      setRecipes(res.data.hits.map(r => r.recipe))
    }
    getRecipes()
  }, [term])
  return (
    <div className="App">
      <header>
        <p>
          Recipe Finder
        </p>
      </header>
      <div>Search bar</div>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
