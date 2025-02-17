import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          backgroundColor: "#121212",
          color: "#fff",
          lineHeight: 1.5,
          scrollBehavior: "smooth",
          boxSizing: "border-box",
          userSelect: "none", // Отключает выделение на всей странице
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none", // Отключает выделение внутри body
        },
        "#root": {
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        "*, *::before, *::after": {
          boxSizing: "inherit",
          margin: 0,
          padding: 0,
          userSelect: "none", // Глобальное отключение выделения
        },
        img: {
          maxWidth: "100%",
          height: "auto",
          display: "block",
        },
        p: {
          margin: 0,
          padding: 0,
        },
        "ul, ol": {
          listStyle: "none",
          margin: 0,
          padding: 0,
        },
        a: {
          color: "inherit",
          textDecoration: "none",
          transition: "color 0.2s ease",
          "&:hover": {
            textDecoration: "underline",
          },
        },
        button: {
          fontFamily: "inherit",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "inherit",
          transition: "opacity 0.2s ease",
          "&:hover": {
            opacity: 0.8,
          },
        },
        "@media (max-width: 768px)": {
          "#root": {
            padding: "0 1rem",
            overflowX: "hidden",
          },
        },
      },
    },
  },
});

export default theme;
