import { useEffect, useState } from 'react';
import { getProductByIdService } from '../service';


async function useGetProduct (idProduct) {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const response = await getProductByIdService(idProduct);
                setData(response);
                console.log(response);
            } catch (error) {
                setError(error.message);
            }
        };
        loadProduct();
    }, []);

    return { data, error /* loading */ };
}

export default useGetProduct;
