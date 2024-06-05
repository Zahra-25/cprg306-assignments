import React from 'react';
import NewItem from './new-item';

export default function Page() {
  return (
    <main className='bg-black flex min-h-screen'>
      <h1 className="text-2xl font-bold mb-4 text-white">Week 4 Assignment</h1>
      <NewItem />
    </main>
  );
}

