import React from "react";
import "./Recipe.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ol>

      <p>Calories:{calories}</p>

      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
