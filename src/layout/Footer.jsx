import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box component="div">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
          
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
