// mui
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box component="footer">
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        borderTop={1}
        borderColor="#ddd"
        mt={10}
        sx={{ cursor: "context-menu" }}
      >
        ساخته شده با ❤️ توسط AliNB99
      </Typography>
    </Box>
  );
}

export default Footer;
