"use client";

import { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 9), 
      name,
      quantity,
      category
    };
    onAddItem(newItem); 
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="p-4 max-w-md mx-auto rounded-xl shadow-md space-y-4 bg-slate-800">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 container">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Item Name'
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 flex space-x-4">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max="99"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold focus:outline-none focus:shadow-outline container py-2 px-4 rounded"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default NewItem;
