import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/fonts.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import themes from "./mui/themes.js";

const client = new ApolloClient({
  uri: import.meta.env.VITE_BASE_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={themes}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
  //</React.StrictMode>
);
