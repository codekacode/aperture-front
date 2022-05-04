import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import Product from './Product/Product';

const Products = () => {

    const classes = useStyles();

    // if (!products.length) return <p>Loading...</p>;

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            
            <Grid key="009" item xs={12} sm={6} md={4} lg={3}>
                <Product />
            </Grid>
            
        </Grid>
        </main>
    )
}

export default Products;