// In-memory data store for recipes (resets on server restart)
export interface Recipe {
  _id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  author: string;
  image?: string; // Optional image URL
  createdAt: Date;
  updatedAt: Date;
}

let recipes: Recipe[] = [
  {
    _id: '1',
    title: 'Classic Spaghetti Carbonara',
    description: 'A traditional Italian pasta dish with eggs, cheese, and pancetta.',
    ingredients: ['200g spaghetti', '100g pancetta', '2 eggs', '50g Parmesan cheese', 'Black pepper'],
    instructions: 'Cook spaghetti. Fry pancetta. Mix eggs and cheese. Combine with hot pasta.',
    author: 'Chef Mario',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '2',
    title: 'Chocolate Chip Cookies',
    description: 'Soft and chewy cookies loaded with chocolate chips.',
    ingredients: ['2 cups flour', '1 cup butter', '1 cup sugar', '1 egg', '2 cups chocolate chips'],
    instructions: 'Cream butter and sugar. Add egg. Mix in flour and chips. Bake at 350°F for 10 minutes.',
    author: 'Baker Sue',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '3',
    title: 'Grilled Salmon with Lemon',
    description: 'Fresh salmon fillet grilled to perfection with lemon and herbs.',
    ingredients: ['4 salmon fillets', '2 lemons', '2 tbsp olive oil', 'Salt', 'Pepper', 'Fresh dill'],
    instructions: 'Marinate salmon with lemon juice, oil, salt, and pepper. Grill for 4-5 minutes per side. Garnish with dill.',
    author: 'Seafood Chef',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '4',
    title: 'Vegetable Stir-Fry',
    description: 'Colorful mix of fresh vegetables stir-fried with soy sauce.',
    ingredients: ['1 bell pepper', '1 carrot', '1 cup broccoli', '2 tbsp soy sauce', '1 tbsp oil', 'Garlic'],
    instructions: 'Chop vegetables. Heat oil, add garlic. Stir-fry veggies for 5-7 minutes. Add soy sauce.',
    author: 'Veggie Lover',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '5',
    title: 'Blueberry Pancakes',
    description: 'Fluffy pancakes bursting with fresh blueberries.',
    ingredients: ['1 cup flour', '1 cup milk', '1 egg', '1 cup blueberries', 'Baking powder', 'Maple syrup'],
    instructions: 'Mix dry ingredients. Add milk and egg. Fold in blueberries. Cook on griddle. Serve with syrup.',
    author: 'Breakfast Guru',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '6',
    title: 'Chicken Tikka Masala',
    description: 'Creamy and spicy Indian curry with tender chicken pieces.',
    ingredients: ['500g chicken', '1 onion', '2 tomatoes', '2 tbsp tikka masala', '1 cup cream', 'Ginger-garlic paste'],
    instructions: 'Marinate chicken with masala. Cook onions, add tomatoes and spices. Add chicken and cream. Simmer.',
    author: 'Spice Master',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '7',
    title: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with spiced chicken and caramelized onions.',
    ingredients: ['500g chicken', '2 cups basmati rice', '2 onions', '2 tomatoes', 'Biryani masala', 'Yogurt', 'Saffron'],
    instructions: 'Marinate chicken with spices and yogurt. Cook rice. Layer with chicken and onions. Dum cook for 30 minutes.',
    author: 'Indian Chef',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '8',
    title: 'Paneer Butter Masala',
    description: 'Creamy tomato-based curry with soft paneer cubes.',
    ingredients: ['200g paneer', '2 tomatoes', '1 onion', 'Butter', 'Cream', 'Garam masala', 'Kasuri methi'],
    instructions: 'Sauté onions and tomatoes. Add spices and butter. Add paneer cubes and cream. Simmer.',
    author: 'Curry Expert',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '9',
    title: 'Masala Dosa',
    description: 'Crispy fermented crepe filled with spiced potato filling.',
    ingredients: ['Dosa batter', '4 potatoes', '1 onion', 'Green chilies', 'Mustard seeds', 'Curry leaves'],
    instructions: 'Cook potato filling with spices. Spread batter on griddle. Add filling and fold.',
    author: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '10',
    title: 'Rajma Chawal',
    description: 'Kidney beans in spicy tomato gravy served with rice.',
    ingredients: ['1 cup rajma', '2 tomatoes', '1 onion', 'Ginger-garlic paste', 'Cumin', 'Coriander', 'Rice'],
    instructions: 'Soak and cook rajma. Make tomato gravy with spices. Mix beans in gravy. Serve with rice.',
    author: 'Punjabi Cuisine',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
let idCounter = 11;

export function getRecipes(): Recipe[] {
  return recipes;
}

export function addRecipe(recipe: Omit<Recipe, '_id' | 'createdAt' | 'updatedAt'>): Recipe {
  const newRecipe: Recipe = {
    ...recipe,
    _id: idCounter.toString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  recipes.push(newRecipe);
  idCounter++;
  return newRecipe;
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(r => r._id === id);
}

export function updateRecipe(id: string, updates: Partial<Recipe>): Recipe | null {
  const index = recipes.findIndex(r => r._id === id);
  if (index === -1) return null;
  recipes[index] = { ...recipes[index], ...updates, updatedAt: new Date() };
  return recipes[index];
}

export function deleteRecipe(id: string): boolean {
  const index = recipes.findIndex(r => r._id === id);
  if (index === -1) return false;
  recipes.splice(index, 1);
  return true;
}