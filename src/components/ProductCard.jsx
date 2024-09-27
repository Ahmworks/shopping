import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/action/basketAction";

function ProductCard({ product }) {
  const { id, title, image, price } = product;
  const dispatch = useDispatch();
  const {basket} = useSelector((state) => state.basket);

  const handleAdd = () => {
    const some = basket.some((item)=>item.id===product.id)
    if(some){
        alert("This product already added!")
    }
    dispatch(add([...basket, { ...product ,quantity:1}]));
  };
  console.log(basket);


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleAdd} size="small">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
