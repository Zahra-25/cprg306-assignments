

import ItemList from './item-list';

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-emerald-50 min-h-screen">
          <h1 className="text-4xl font-bold mb-8 text-center text-sky-600">🛒 Shopping List 🛍️</h1>
      <ItemList />
    </main>
  );
}

