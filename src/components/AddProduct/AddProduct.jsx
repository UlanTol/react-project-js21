import React, { useContext, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { productsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);
  const navigate = useNavigate();

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
    if (!title.trim() || !description.trim("") || !image.trim() || !price) {
      alert("Fill the blanks");
    } else {
      createProduct(newProduct);
    }
    navigate("/products");
  }

  return (
    <Container maxWidth="sm">
      <Box display={"flex"} marginTop={"30px"} flexDirection={"column"}>
        <Typography>Add product</Typography>
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

export default AddProduct;
