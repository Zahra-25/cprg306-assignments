const Item = ({ name, quantity, category }) => {
    return (
        <li className="bg-gray-800 m-3 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white">{name}</h2>
            <p className="text-gray-300">Buy {quantity} in {category}</p>
        </li>
    );
}

export default Item;