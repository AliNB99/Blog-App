import { CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <div
      style={{
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} />
    </div>
  );
}

export default Loader;
