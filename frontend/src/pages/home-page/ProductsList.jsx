import useAllProducts from '../../hooks/useAllProducts';
import ProductItem from '../../components/product-item/ProductItem';
import Loading from '../../components/loading/Loading';

function ProductsList () {
    const { products, loading, error } = useAllProducts();

    if (loading) return <Loading />;
    if (error) return <p>{error}</p>;


    return (
        products.length
            ? <ul>
                {products.map((product) => {
                    return (
                        <li key={product.product_id}>
                            <ProductItem product={product} />
                        </li>
                    );
                })}
            </ul>
            : <p>No hay ningún producto disponible</p>
    );
}

export default ProductsList;
