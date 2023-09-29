import { useEffect, useState } from 'react';
import { getUserProfileService } from '../service';

function useGetUserProfile (idUser) {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadUser = async () => {
            try {
                setLoading(true);
                const data = await getUserProfileService(idUser);
                console.log(data);
                setUser(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [idUser]);

    return { user, error, loading };
}

export default useGetUserProfile;
