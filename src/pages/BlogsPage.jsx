import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS } from "../graphql/queries";
import CardBlog from "../components/shared/CardBlog";
import { Box, Container, Grid, Typography } from "@mui/material";
import Loader from "../components/shared/Loader";

function BlogsPage() {
  const { loading, data, error } = useQuery(GET_POSTS);
  if (loading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;
  return (
    <Container maxWidth="lg">
      <Box component="div" mx={3}>
        <Typography variant="h5" component="h5" my={3} fontWeight={700}>
          وبلاگ ها
        </Typography>
        <Grid container spacing={4}>
          {data.posts.map((i) => (
            <Grid key={i.id} item xs={12} md={6} lg={4}>
              <CardBlog data={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default BlogsPage;
