import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

import useStyles from './styles';

export const Product = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Reloj Apple Watch
                    </Typography>
                     <Typography gutterBottom variant="h5" component="h2">
                        20.00
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" >
                    {/* <AddShoppingCart /> */}
                </IconButton>
            </CardActions>
        </Card>
    )
}