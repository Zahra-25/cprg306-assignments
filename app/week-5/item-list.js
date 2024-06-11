"use client";

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-3/4 my-4 border-t border-cyan-700"></div> {/* Horizontal rule */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 ${sortBy === 'name' ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' : 'bg-white text-black'} border border-gray-400 rounded hover:bg-blue-700 transition duration-200`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 mx-2 ${sortBy === 'category' ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' : 'bg-white text-black'} border border-gray-400 rounded hover:bg-blue-700 transition duration-200`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
        <button
          className={`px-4 py-2 mx-2 ${sortBy === 'group' ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' : 'bg-white text-black'} border border-gray-400 rounded hover:bg-blue-700 transition duration-200`}
          onClick={() => setSortBy('group')}
        >
          Group by Category
        </button>
      </div>
      {sortBy === 'group' ? (
        <div className="w-full">
          {Object.keys(groupedItems).map(category => (
            <div key={category} className="mb-6">
              <h2 className="capitalize text-2xl font-semibold mt-4 mb-2 text-center text-sky-600">{category}</h2>
              <ul className="flex flex-wrap justify-center">
                {groupedItems[category].map(item => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="flex flex-wrap justify-center w-full">
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

