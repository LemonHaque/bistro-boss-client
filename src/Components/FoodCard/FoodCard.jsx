
const FoodCard = ({ item }) => {
    const { name, recipe, image, price, } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-2 top-2 bg-yellow-500 font-semibold m-4 px-3 py-2 rounded-md">$ {price}</p>
            <div className="card-body text-center">
                <h2 className="text-2xl text-yellow-500 font-semibold">{name}</h2>
                <p>{recipe}</p>
                <div className="mt-4 text-center">
                <button className='btn btn-outline btn-warning bg-slate-50 border-0 border-b-4 mt-6'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;