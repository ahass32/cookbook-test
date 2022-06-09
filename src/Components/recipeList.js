import React from "react";

import { Card, Image, Text } from "@mantine/core";

const RecipeList = (props) => {
  return (
    <>
      {props.recipes.map((recipe, key) => (
        <Card
          sx={{
            borderColor:
              props?.selectedRecipe?.name === recipe.name ? "white" : "#1A1B1E",
            borderStyle: "solid",
            borderWidth: 3,
            margin: 10,
          }}
          key={key}
          shadow="sm"
          p="xl"
          component="a"
          target="_blank"
          width="50%"
          onClick={() => props.clickCard(recipe)}
        >
          <Card.Section>
            <Image src={recipe.image} height={160} alt="No way!" />
          </Card.Section>

          <Text weight={500} size="lg">
            {recipe.name}
          </Text>
        </Card>
      ))}
    </>
  );
};

export default RecipeList;
