"use client";

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        const id = Math.random().toString(36).substring(2, 9);
        newItem.id = id;
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="flex flex-col items-center bg-gradient-to-r from-cyan-100 to-sky-500 min-h-screen p-4">
            <h1 className="text-5xl font-bold mb-8 text-center text-sky-800">🛒 Shopping List & Meal Ideas 🍽️</h1>
            <div className="flex flex-wrap w-full">
                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-2xl font-bold mb-4 text-sky-700">Shopping List</h2>
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    {selectedItemName && (
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-2xl font-bold mb-4 text-sky-700">Meal Ideas</h2>
                            <MealIdeas ingredient={selectedItemName} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}