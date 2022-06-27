import { Box, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const Details = () => {
  const { oneProduct, getOneProduct } = useContext(productsContext);
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  return (
    <Container>
      <Box></Box>
    </Container>
  );
};

export default Details;
