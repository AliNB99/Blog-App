// mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// icons
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box component="div">
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Box component="div" sx={{ flexGrow: 1 }}>
              <Typography
                sx={{ cursor: "context-menu" }}
                variant="h5"
                component="h5"
                fontWeight={700}
              >
                مینی وبلاگ
              </Typography>
            </Box>
            <Box component="div" display="flex" gap={5}>
              <Link to="/blogs">
                <Typography variant="p" component="p" fontWeight={700}>
                  وبلاگ ها
                </Typography>
              </Link>
              <Link to="/authors">
                <Typography variant="p" component="p" fontWeight={700}>
                  نویسندگان
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
