import React from "react";

import { Card, Image, Text, Badge, Group } from "@mantine/core";

const RecipeDetails = (props) => {
  return (
    <>
      <Card shadow="sm" p="xl" component="a" target="_blank">
        {props.item ? (
          <>
            <Text p={15} weight={700} color="pink" variant="light">
              {props?.item?.name}
            </Text>
            <Card.Section>
              <Image src={props?.item?.image} height={160} alt="No way!" />
            </Card.Section>
            <Group position="right" style={{ marginBottom: 5, marginTop: 5 }}>
              <Badge size="lg" color="pink" variant="light" m={15}>
                {props?.item?.price} AED
              </Badge>
            </Group>

            <Text> Author : {props?.item?.author}</Text>
            <Text> Description : {props?.item?.description}</Text>
            {props?.item?.ingredients?.map((ingredient, key) => (
              <Text ingredients key={key}>
                Ingredients :{ingredient}
              </Text>
            ))}
          </>
        ) : (
          <Text> Please Choose an Item !!</Text>
        )}
      </Card>
    </>
  );
};

export default RecipeDetails;
