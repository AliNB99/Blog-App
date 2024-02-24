import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS } from "../graphql/queries";
import { Container, Grid, Typography } from "@mui/material";
import CardAuthor from "../components/authorsPage/CardAuthor";
import Loader from "../components/shared/Loader";

function AuthorsPage() {
  const { loading, data, error } = useQuery(GET_AUTHORS);

  if (loading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h5"
        component="h5"
        fontWeight={700}
        mt={5}
        mb={3}
        px={3}
      >
        نویسندگان
      </Typography>
      <Grid container spacing={3} px={3}>
        {data.authors.map((i) => (
          <Grid item xs={12} md={6}>
            <CardAuthor key={i.id} data={i} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AuthorsPage;
