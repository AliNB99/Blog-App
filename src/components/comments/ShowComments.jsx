import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COMMENTS } from "../../graphql/queries";
import { useParams } from "react-router-dom";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function ShowComments({ slug }) {
  const { loading, data, error } = useQuery(GET_COMMENTS, {
    variables: {
      slug: slug,
    },
  });

  if (loading) return;
  if (error) return;

  return (
    <Grid container mt={10} gap={2}>
      <Typography variant="h5" component="h5" fontWeight={700} color="primary">
        کامنت ها
      </Typography>
      {!data.comments.length ? (
        <Grid item xs={12}>
          <Box
            component="div"
            sx={{ boxShadow: "0px 0px 10px #ccc", p: 5, borderRadius: "10px" }}
          >
            <Typography
              variant="h6"
              component="h6"
              fontWeight={700}
              textAlign="center"
              color='secondary'
            >
              کامنتی برای این پست وجود ندارد.
            </Typography>
          </Box>
        </Grid>
      ) : (
        data.comments.map((comment) => (
          <Grid
            key={comment.id}
            item
            xs={12}
            sx={{ border: "1px solid #aaa", p: 2, borderRadius: "10px" }}
          >
            <Box component="div" display="flex" alignItems="center" gap={1}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography variant="p" component="p" fontWeight={600}>
                {comment.name}
              </Typography>
            </Box>
            <Typography variant="p" component="p" ml={2} mt={2}>
              {comment.text}
            </Typography>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default ShowComments;
