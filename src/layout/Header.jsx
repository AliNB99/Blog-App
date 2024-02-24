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
                variant="h6"
                component="div"
              >
                مینی وبلاگ
              </Typography>
            </Box>
            <Box component="div" display="flex" gap={5}>
              <Link to="/blogs">
                <Typography>وبلاگ ها</Typography>
              </Link>
              <Link to="/authors">
                <Typography>نویسندگان</Typography>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
