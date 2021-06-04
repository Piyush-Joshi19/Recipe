import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./Recipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("chicken");
  const fetchData = async () => {
    const res = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=1a6b0d7a&app_key=80fd6632a23e17593551435df42a4b8d`
    );
    console.log(res.data.hits);
    setRecipes(res.data.hits);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const getItem = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div>
      <div className="container initial">
        <h1 className="brand">Recipe App</h1>
        <form onSubmit={getSearch}>
          <input
            type="text"
            placeholder="Search Your Recipe..."
            onChange={getItem}
          />
          <button type="submit">Search</button>
        </form>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.label}
            recipe={recipe}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
