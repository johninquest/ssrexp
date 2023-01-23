import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "##000000",
      main: "##000000",
      dark: "##000000",
    },
    /*     primary: {
      light: "#ffe54c",
      main: "#ffb300",
      dark: "#c68400",
    }, */
    secondary: {
      light: "#f35d74",
      main: "#bb2649",
      dark: "#850022",
    },
    error: {
      main: "#b71c1c",
    },
  },
});

export default theme;
