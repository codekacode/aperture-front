import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({item}) => {
    const classes = useStyles();

    return (
        <Card className="cart-item">
        <CardMedia className={classes.media} />
        <CardContent className={classes.cardContent}>
            <Typography variant="h4">Producto 1</Typography>
            <Typography variant="h5">30000.00</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <div className={classes.buttons}>
            <Button type="button" size="small" >-</Button>
            <Typography>&nbsp;9&nbsp;</Typography>
            <Button type="button" size="small" >+</Button>
            </div>
            <Button variant="contained" type="button" color="secondary" >Remove</Button>
        </CardActions>
        </Card>
    )
}

export default CartItem;