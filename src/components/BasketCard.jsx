import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/action/basketAction";

function BasketCard({ product }) {
  const { id, title, image, price } = product;

  const { basket } = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  const handleUpdate = (productId, quantity) => {
    if (quantity === 0) {
      dispatch(remove(productId));
    } else {
      const update = basket.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      );
      dispatch(add(update));
    }
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 340 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price + "$"}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" alignItems="center">
          <Button
            onClick={() => handleUpdate(product.id, product.quantity - 1)}
            type="button"
            size="small"
          >
            -
          </Button>
          <Typography>{product.quantity}</Typography>
          <Button
            onClick={() => handleUpdate(product.id, product.quantity + 1)}
            type="button"
            size="small"
          >
            +
          </Button>
          <Button
            onClick={() => handleRemove(product.id)}
            type="button"
            size="small"
          >
            REMOVE
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default BasketCard;
