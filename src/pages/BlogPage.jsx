import { useQuery } from "@apollo/client";
import { GET_POST } from "../graphql/queries";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import sanitizeHtml from "sanitize-html";
import Loader from "../components/shared/Loader";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_POST, {
    variables: {
      slug: slug,
    },
  });

  if (loading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;

  const { author, content, coverPhoto, title } = data.post;
  console.log(content);

  return (
    <Container maxWidth="lg">
      <Grid container mt={4} px={3}>
        <Grid
          item
          xs={12}
          sx={{ width: "100%" }}
          mx={1}
          mb={4}
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            variant="h5"
            component="h5"
            fontWeight={700}
            color="primary.main"
          >
            {title}
          </Typography>
          <Link onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="img"
            src={coverPhoto[0].url}
            sx={{ width: "100%", borderRadius: 5 }}
          />
        </Grid>
        <Grid item xs={12} display="flex" alignItems="center" my={4}>
          <Avatar
            src={author.avatar.url}
            sx={{ width: "80px", height: "80px" }}
          />
          <Link to={`/authors/${author.slug}`}>
            <Typography variant="h6" component="h6" mr={2}>
              {author.name}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="p"
            component="p"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
            lineHeight={3}
            textAlign="justify"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
