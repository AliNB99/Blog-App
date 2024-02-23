import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// icons
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Header = () => {
  return (
    <Box component="div">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            مینی وبلاگ
          </Typography>
          <BookmarkIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
