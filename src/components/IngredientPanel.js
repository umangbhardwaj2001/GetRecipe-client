import React, { useState } from "react";
import axios from "axios";

const IngredientPanel = ({ updateRecipes }) => {
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const preparedIngredients = `Write a recipe that only uses the following ingredients (you can include olive oil, seasoning, and dried spices): ${ingredients}`;
      const response = await axios.post(
        "https://getrecipe-server.onrender.com/recipes",
        {
          data: preparedIngredients,
        }
      );
      updateRecipes(response?.data?.choices[0]?.text);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients"
        />
        <button type="submit">Get Recipes</button>
      </form>
    </div>
  );
};

export default IngredientPanel;
