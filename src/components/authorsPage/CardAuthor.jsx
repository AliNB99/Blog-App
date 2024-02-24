import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { e2p } from "../../helper/e2p";
import { Link } from "react-router-dom";

function CardAuthor({ data }) {
  const { avatar, field, name, posts, slug } = data;
  return (
    <Card sx={{ boxShadow: "0px 0px 10px #c5c4c4" }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar src={avatar.url} sx={{ width: "120px", height: "120px" }} />
        <Box component="div">
          <Link to={`/authors/${slug}`}>
            <Typography
              variant="h6"
              component="h6"
              textAlign="center"
              fontWeight={700}
            >
              {name}
            </Typography>
          </Link>
          <Typography
            variant="p"
            component="p"
            textAlign="center"
            color="secondary"
            sx={{ cursor: "context-menu" }}
          >
            {field}
          </Typography>
        </Box>
        <Box component="div">
          <Typography
            variant="h2"
            component="h2"
            textAlign={"center"}
            fontWeight={700}
            color="primary"
            sx={{ cursor: "context-menu" }}
          >
            {e2p(posts.length)}
          </Typography>
          <Typography variant="p" component="p" sx={{ cursor: "context-menu" }}>
            تعداد مقالات
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardAuthor;
