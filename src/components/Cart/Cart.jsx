import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';

import useStyles from './styles';

const Cart = ({ cart }) => {
    const classes = useStyles();

    const renderEmptyCart = () => (
        <Typography>
            No tienes items en tu carrito de compras,
            <Link className={classes.link} to="/">empieza a anadir ahora!</Link>
        </Typography>
    )

    const renderCart = () => (
        <>
            <Grid>
                <Grid item xs={12} sm={4} key={lineItem.id}>
                    <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                </Grid>
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar}>
                <Typography className={classes.title} variant="h3" gutterBottom>Tu carrito de compras</Typography>
                { !cart.line_items.length ? renderEmptyCart() : renderCart() }
            </div>
        </Container>
    )
}

export default Cart;