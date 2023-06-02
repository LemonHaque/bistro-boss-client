import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const useCart = () => {
    const { user } = useAuth();
    const { loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    console.log(token);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })

            console.log(cart);
            return res.json();
        },
    })
    return [cart, refetch]
}

export default useCart;