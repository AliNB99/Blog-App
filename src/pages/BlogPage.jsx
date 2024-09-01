import { useQuery } from "@apollo/client";
import { GET_POST } from "../graphql/queries";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import sanitizeHtml from "sanitize-html";
import Loader from "../components/shared/Loader";
import CreateComment from "../components/comments/CreateComment";
import ShowComments from "../components/comments/ShowComments";
import NotFoundPage from "./404";

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
  if (!data.post) return <NotFoundPage />;

  const { author, content, coverPhoto, title } = data.post;

  return (
    <Container maxWidth="lg">
      <Grid container mt={5} px={3}>
        <Grid
          item
          xs={12}
          sx={{ width: "100%" }}
          mx={1}
          mb={6}
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
            sx={{ width: "80px", height: "80px", marginRight: "20px" }}
          />
          <Box component="div">
            <Link to={`/authors/${author.slug}`}>
              <Typography variant="h6" component="h6" mr={2}>
                {author.name}
              </Typography>
            </Link>
            <Typography variant="p" component="p" color="secondary.main">
              {author.field}
            </Typography>
          </Box>
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
        <Grid item xs={12} mt={15}>
          <CreateComment slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <ShowComments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
