import React, { useState } from "react";
import { Paper, Group } from "@mantine/core";

import { Recipes } from "../Mock/dummy";

import RecipeList from "../Components/recipeList";
import RecipeDetails from "../Components/recipeDetails";

const HomePage = () => {
  const [recipes] = useState(Recipes);
  const [selectedRecipe, updateSelectedRecipe] = useState();

  return (
    <Group position="apart">
      <Paper m="lg" p="xl" shadow="md" width="50%  " style={{ width: "25%" }}>
        <RecipeList
          recipes={recipes}
          clickCard={(recipe) => updateSelectedRecipe(recipe)}
          selectedRecipe={selectedRecipe}
        />
      </Paper>
      <Paper m="lg" p="xl" shadow="md" width="50%  " style={{ width: "25%" }}>
        <RecipeDetails item={selectedRecipe} />
      </Paper>
    </Group>
  );
};

export default HomePage;
