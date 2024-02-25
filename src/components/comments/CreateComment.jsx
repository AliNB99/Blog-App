import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_COMMENT } from "../../graphql/mutations";
import { Box, Button, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";

function CreateComment({slug}) {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    text: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue((item) => ({ ...item, [name]: value }));
  };

  const [setComment, { loading, data, error, reset }] = useMutation(
    CREATE_COMMENT,
    {
      variables: {
        name: inputValue.name,
        email: inputValue.email,
        text: inputValue.text,
        slug: slug,
      },
    }
  );

  const submitHandler = () => {
    if (inputValue.name && inputValue.email && inputValue.text) {
      setComment();
      setInputValue({
        name: "",
        email: "",
        text: "",
      });
    } else {
      toast.error("لطفا تمام مقادیر را پر کنید.");
      return;
    }
  };

  if (data) {
    toast.success("نظر شما ثبت شد و منتظر تایید است.");
    reset();
  }

  if (error) return;

  return (
    <Box component="div">
      <Typography
        variant="h5"
        component="h5"
        fontWeight={700}
        color="primary"
        my={4}
      >
        ارسال کامنت
      </Typography>
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        gap={2}
        p={2}
        sx={{ boxShadow: "0px 0px 10px #ccc", borderRadius: "10px" }}
      >
        <TextField
          id="outlined-basic"
          label="نام و نام خانوادگی"
          variant="outlined"
          name="name"
          value={inputValue.name}
          onChange={changeHandler}
        />
        <TextField
          id="outlined-basic"
          label="ایمیل"
          variant="outlined"
          name="email"
          value={inputValue.email}
          onChange={changeHandler}
        />
        <TextField
          id="outlined-basic"
          label="متن"
          variant="outlined"
          name="text"
          value={inputValue.text}
          onChange={changeHandler}
          multiline
          minRows={6}
        />
        {!loading ? (
          <Button
            onClick={submitHandler}
            variant="contained"
            sx={{ width: "7rem" }}
          >
            ارسال
          </Button>
        ) : (
          <Button disabled variant="contained" sx={{ width: "7rem" }}>
            در حال ارسال...
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default CreateComment;
