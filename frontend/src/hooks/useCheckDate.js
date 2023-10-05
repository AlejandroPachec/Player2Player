import { useEffect, useState } from 'react';
import { seeOrdersService } from '../service';

function useCheckDate (token) {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [checkedDate, setCheckedDate] = useState(null);

    useEffect(() => {
        const loadCheckedDate = async () => {
            try {
                setLoading(true);
                const data = await seeOrdersService(token);
                const checkedOrders = data.orders.filter((order) => order.exchange_time !== null || order.exchange_time > new Date());
                setCheckedDate(checkedOrders);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadCheckedDate();
    }, [token]);

    return { error, loading, checkedDate };
}

export default useCheckDate;
