import React from "react";

const Recipe = ({ recipe, ingredients }) => {
  return (
    <div className="search-result">
      <div className="item">
        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        <div className="flex-container">
          <h1
            style={{ color: "white", marginTop: "10px", marginBottom: "10px" }}
            className="title"
          >
            {recipe.recipe.label}
          </h1>

          <h3>
            <ol>
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ol>
          </h3>
        </div>
        <p className="item-data">
          Calories: {Math.floor(recipe.recipe.calories)}
        </p>
      </div>
    </div>
  );
};

export default Recipe;
