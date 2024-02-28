import Icon404 from "../svg/404.rocket.svg";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

function NotFoundPage() {
  useTitle("خطای 404");
  return (
    <Grid container display="flex" flexDirection="column" alignItems="center">
      <Grid item xs={12}>
        <img src={Icon404} alt="image 404" style={{ width: "500px" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          component="h6"
          textAlign="center"
          color="secondary"
          mb={2}
        >
          صفحه ای که دنبال آن بودید پیدا نشد!
        </Typography>
        <Box component="div" display="flex" justifyContent="center" gap={2}>
          <Link to="/blogs">
            <Button variant="outlined">مشاهده بلاگ ها</Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default NotFoundPage;
