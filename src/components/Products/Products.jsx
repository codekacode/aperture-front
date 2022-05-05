import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import Product from './Product/Product';


export const Products = ({products}) => {

    const classes = useStyles();

    // if (!products.length) return <p>Loading...</p>;

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
            <Grid key="009" item xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>
            </Grid>
             ))}
        </Grid>
        </main>
    )
}

