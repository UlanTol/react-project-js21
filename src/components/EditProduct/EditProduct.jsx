import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newProduct = {
      title,
      price,
      description,
      image,
    };
  }

  return (
    <Container maxWidth="sm">
      <Box display={"flex"} marginTop={"30px"} flexDirection={"column"}>
        <Typography>Edit product</Typography>
        <TextField
          label="Title"
          variant="filled"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          type="number"
          label="Price"
          variant="filled"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          label="Description"
          variant="filled"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          label="Image"
          variant="filled"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
      </Box>
      <Button
        style={{ margin: "0 auto" }}
        onClick={handleSave}
        variant="outlined">
        Save
      </Button>
    </Container>
  );
};

export default EditProduct;
