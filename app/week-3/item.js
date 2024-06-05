const Item = ({name, quantity, category}) =>{
    return (
        <div className="container mx-auto">
            <li className="bg-slate-900 m-3 p-2 w-1/4 rounded-md border border-gray-700">
            <h2 className="text-2xl font-bold text-white">{name}</h2>
            <p className="text-white"> Buy {quantity} in {category}</p>
        </li>
        </div>
    )
}

export default Item

