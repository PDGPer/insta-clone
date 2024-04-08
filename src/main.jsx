import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Global styles to override the theme
// being fed to <ChakraProvider>
const styles = {
  global: (props) => ({
    body: {
      // Changes first the light and then
      // the dark mode background colors
      bg: mode("gray.100", "#000")(props),
      // Same, but for color
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
};

// Part of Chakra UI default setup
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Notice the custom styles being passed here
const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Theme goes brrrrrrrrrrrr here */}
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
