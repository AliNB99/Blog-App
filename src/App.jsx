import React from "react";
import RoutesInfo from "./routes/Routes";
import Layout from "./layout/Layout";
import { Toaster } from "react-hot-toast";
import ScrollToTop  from "./components/ScrollToTop";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <RoutesInfo />
      <Toaster />
    </Layout>
  );
}

export default App;
