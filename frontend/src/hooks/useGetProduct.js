import { useEffect, useState } from 'react';
import { getProductByIdService } from '../service';


function useGetProduct (idProduct) {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const response = await getProductByIdService(idProduct);
                setData(response);
            } catch (error) {
                setError(error.message);
            }
        };
        loadProduct();
    }, [idProduct]);

    return { data, error };
}

export default useGetProduct;
