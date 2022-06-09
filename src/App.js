import React from "react";
import { useState } from "react";

import "./App.css";

import AppHeader from "./Components/Header/header";
import ThemeProvider from "./Theme/theme-provider";
import HomePage from "./Pages/home-page";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <ThemeProvider>
      <AppHeader headerName="Cookbook">
        <HomePage />
      </AppHeader>
    </ThemeProvider>
  );
}

export default App;
