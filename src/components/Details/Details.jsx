import { Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Loading from "../Loading/Loading";

const Details = () => {
  const { oneProduct, getOneProduct } = useContext(productsContext);
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  return oneProduct ? (
    <Container>
      <Box>
        <Typography variant="h4">{oneProduct.title}</Typography>
        <Typography variant="h5">{oneProduct.description}</Typography>
        <Typography variant="h5">{oneProduct.price}</Typography>
        <img width="50%" src={oneProduct.image} alt="product" />
      </Box>
    </Container>
  ) : (
    <Loading />
  );
};

export default Details;
