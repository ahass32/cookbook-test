import React from "react";
import { ActionIcon } from "@mantine/core";

const HeaderIcon = React.memo((props) => {
  return (
    <ActionIcon variant="default" onClick={props.clickIcon} size={30}>
      {props.colorScheme === "dark" ? props.iconLight : props.iconDark}
    </ActionIcon>
  );
});

export default HeaderIcon;
