'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Recipe {
  _id: string;
  title: string;
  description: string;
  author: string;
  image?: string;
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/recipes')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setRecipes(data);
        }
      })
      .catch(err => setError('Failed to fetch recipes'));
  }, []);

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Recipe Sharing App</h1>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing App</h1>
      <Link href="/add-recipe" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Add New Recipe
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe._id} className="border p-4 rounded bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
            {recipe.image && (
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded mb-4" />
            )}
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">By {recipe.author}</p>
            <Link href={`/recipe/${recipe._id}`} className="text-blue-500">View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
