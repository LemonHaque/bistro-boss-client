import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/UseCart";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [,refetch]= useCart();
    const navigate = useNavigate();
    const location = useLocation();
    

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, recipe, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId){
                        refetch();     
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added on the Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-2 top-2 bg-yellow-500 font-semibold m-4 px-3 py-2 qrounded-md">$ {price}</p>
            <div className="card-body text-center">
                <h2 className="text-2xl text-yellow-500 font-semibold">{name}</h2>
                <p>{recipe}</p>
                <div className="mt-4 text-center">
                    <button onClick={() => handleAddToCart(item)} className='btn btn-warning bg-slate-100 text-black border-0 border-b-4 border-yellow-500 mt-6 '>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;