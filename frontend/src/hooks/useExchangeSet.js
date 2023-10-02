import { useEffect, useState } from 'react';
import { exchangeSetService } from '../service';

function useExchangeSet (order, token) {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [exchangeData, setExchangeData] = useState(null);

    useEffect(() => {
        const loadExchangeSet = async () => {
            try {
                setLoading(true);
                const exchangeSet = await exchangeSetService(order, token);
                setExchangeData(exchangeSet);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadExchangeSet();
    }, [order, token]);

    return { error, loading, exchangeData };
}

export default useExchangeSet;
