import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
// import { cartContext } from "../../contexts/basketContext";
import Loading from "../Loading/Loading";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/basketContext";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function Basket() {
  const navigate = useNavigate();

  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);
  console.log(getCart);
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return cart ? (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Subprice</TableCell>
              <TableCell align="right">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map(row => (
              <TableRow
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.item.title}
                </TableCell>
                <TableCell align="right">{row.item.price}</TableCell>
                <TableCell align="right">{row.count}</TableCell>
                <IconButton
                  onClick={() => changeCount(row.count - 1, row.item.id)}>
                  <RemoveIcon />
                </IconButton>

                <IconButton
                  onClick={() => changeCount(row.count + 1, row.item.id)}>
                  <AddIcon />
                </IconButton>

                <TableCell align="right">{row.subPrice}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <DeleteIcon onClick={() => deleteFromCart(row.item.id)} />
                  </IconButton>
                  <IconButton
                    onClick={() => navigate(`/details/${row.item.id}`)}>
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Typography variant="h4">Total: {cart.totalPrice}</Typography>
      </Box>
    </Container>
  ) : (
    <Loading />
  );
}
