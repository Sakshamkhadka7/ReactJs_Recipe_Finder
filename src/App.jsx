import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );

    const data = await response.json();
    setRecipe(data.recipes || []);
    console.log(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search.trim() || "chicken");
    setSearch("");
  };

  return (
    <>
      <div className="App">
        <h1 style={{ textAlign: "center" }} className="head">
          Welcome to Recipe Web APP By Saksham Khadka
        </h1>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Search Recipe"
          />
          <button type="submit" className="search-button">
            Search Recipe
          </button>
        </form>

        <div className="recipes">
          {recipes.map((rec) => (
            <Recipe
              key={rec.id}
              title={rec.name}
              calories={rec.caloriesPerServing}
              image={rec.image}
              ingredients={rec.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
