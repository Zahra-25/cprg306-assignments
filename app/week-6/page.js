"use client";

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    
    const id = Math.random().toString(36).substring(2, 9);
    newItem.id = id;
    setItems([...items, newItem]);
  };

  return (
    <main className="flex flex-col items-center bg-emerald-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-600">🛒 Shopping List 🛍️</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

