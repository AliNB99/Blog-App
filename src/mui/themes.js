import { createTheme } from "@mui/material";

const themes = createTheme({
  typography: {
    fontFamily: `"YekanBakh", "Roboto", "Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },

  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#7b7b7b",
    },
  },

  direction: "rtl",
});

export default themes;
