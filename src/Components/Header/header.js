import React from "react";

import { AppShell, Header, Group, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import HeaderName from "./header-name";
import HeaderIcon from "./header-icon";

const AppHeader = React.memo((props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <Group sx={{ height: "100%", flex: 1 }} px={20} position="apart">
            <HeaderName headerName={props.headerName} />

            <HeaderIcon
              colorScheme={colorScheme}
              iconDark={<MoonStars size={30} />}
              iconLight={<Sun size={30} />}
              clickIcon={() => {
                toggleColorScheme();
              }}
            />
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {props.children}
    </AppShell>
  );
});
export default AppHeader;
