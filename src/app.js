import React, { useState } from "react";
import IngredientPanel from "./components/IngredientPanel";
import RecipePanel from "./components/RecipePanel";
import ReactDOM from "react-dom/client";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const updateRecipes = (newRecipes) => {
    setRecipes(newRecipes);
  };

  return (
    <div>
      <IngredientPanel updateRecipes={updateRecipes} />
      <RecipePanel recipes={recipes} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
