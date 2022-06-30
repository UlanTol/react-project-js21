import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { productsContext } from "../../contexts/productsContext";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const EditProduct = () => {
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);

  const navigate = useNavigate();

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);
  // console.log(oneProduct);S
  function handleSave() {
    const editedProduct = {
      title,
      price,
      description,
      image,
    };
    // console.log(editedProduct);
    updateProduct(id, editedProduct);
    navigate("/products");
  }

  return oneProduct ? (
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
  ) : (
    <Loading />
  );
};

export default EditProduct;
