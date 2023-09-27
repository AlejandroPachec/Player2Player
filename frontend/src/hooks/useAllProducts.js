import { useState, useEffect } from 'react';
import { getAllProductsService } from '../service';

const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);

                const data = await getAllProductsService();

                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return { products, loading, error };
};

export default useAllProducts;
