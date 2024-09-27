import { Container, Grid } from "@mui/material";
import React from "react";
import BasketCard from "../components/BasketCard";
import { useSelector } from "react-redux";

function Basket() {
  const { basket, count } = useSelector((state) => state.basket);
  return (
    <Container>
      <Grid container spacing={4} mt={15}  >
        {basket.map((product) => (
          <Grid >
            <BasketCard product={product} />
          </Grid>
        ))}
      </Grid>
      
    </Container>
  );
}

export default Basket;
