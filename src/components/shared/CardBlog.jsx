import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardBlog({ data }) {
  const { coverPhoto, slug, title, author } = data;
  return (
    <Card sx={{ boxShadow: "0px 0px 10px #aaa" }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} />}
          title={
            <Link to={`/authors/${author.slug}`}>
              <Typography
                component="p"
                variant="p"
                fontWeight={500}
                mr={1}
                color="secondary.main"
              >
                {author.name}
              </Typography>
            </Link>
          }
        />
      )}
      <CardMedia component="img" height="194" image={coverPhoto[0].url} />
      <CardContent>
        <Typography variant="body1" component="h3" fontWeight={700} height={30}>
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" component="div" sx={{ marginY: "16px" }} />
      <Box component="div" p={1.2}>
        <Link to={`/blogs/${slug}`}>
          <Button
            variant="outlined"
            fullWidth
            sx={{ borderRadius: 4, marginBottom: 1 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </Box>
    </Card>
  );
}

export default CardBlog;
