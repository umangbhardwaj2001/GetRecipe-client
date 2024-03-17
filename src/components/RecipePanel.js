import React from "react";

const RecipePanel = ({ recipes }) => {
  const splitIntoParagraphs = (text) => {
    if (typeof text !== "string") {
      console.error("Recipe text is not a string:", text);
      return null;
    }
    return text
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <div>
      <h2>Recipe</h2>
      {splitIntoParagraphs(recipes)}
    </div>
  );
};

export default RecipePanel;
