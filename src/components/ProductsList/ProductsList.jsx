import { Box, Container, Pagination, Slider, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { products, getProducts, pages } = useContext(productsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );
  const [price, setPrice] = useState([1, 100000]);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    // console.log("search changed!");
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 1,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  // console.log(products);
  // console.log(window.location.search);
  // console.log(currentPage);
  // console.log(price);
  return (
    <Container>
      <Box>
        <TextField
          value={search}
          onChange={e => setSearch(e.target.value)}
          label="Search"
          variant="filled"
        />
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => {
            // console.log(value);
            setPrice(value);
          }}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          min={0}
          max={100000}
          step={1000}
        />
      </Box>
      <Box>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box>
        <Pagination
          onChange={(e, page) => {
            // console.log(page);
            setCurrentPage(page);
          }}
          count={pages}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
