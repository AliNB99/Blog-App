import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHOR } from "../graphql/queries";
import { useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardBlog from "../components/shared/CardBlog";
import Loader from "../components/shared/Loader";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR, {
    variables: {
      slug: slug,
    },
  });

  if (loading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;

  const { avatar, field, name, posts, description } = data.author;

  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container gap={10} px={3}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={3}
          mt={10}
        >
          <Avatar src={avatar.url} sx={{ width: "250px", height: "250px" }} />
          <Box component="div">
            <Typography
              variant="h5"
              component="h5"
              fontWeight={700}
              textAlign="center"
              sx={{ cursor: "context-menu" }}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              component="h6"
              color="secondary.main"
              textAlign="center"
              sx={{ cursor: "context-menu" }}
            >
              {field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
            textAlign="justify"
            lineHeight={3}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="h6"
            fontWeight={700}
            color="primary"
            mb={3}
            sx={{ cursor: "context-menu" }}
          >
            وبلاگ های {name}
          </Typography>
          <Grid container spacing={2}>
            {posts.map((i) => (
              <Grid item xs={12} sm={6} lg={4} key={i.id}>
                <CardBlog data={i} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
