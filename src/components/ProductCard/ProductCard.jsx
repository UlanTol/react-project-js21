import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { cartContext } from "../../contexts/basketContext";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = React.useContext(productsContext);
  const { addToBasket } = React.useContext(cartContext);
  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <CardMedia
        component="img"
        height="170"
        image={item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/details/${item.id}`)}>
          Details
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit{" "}
        </Button>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <IconButton>
          <AddShoppingCartIcon onClick={() => addToBasket(item)} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
