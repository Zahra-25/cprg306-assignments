import { useEffect, useState } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
}

async function fetchMealDetails(mealId) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
}

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
        setSelectedMeal(null);
      }
    };

    loadMealIdeas();
  }, [ingredient]);

  const handleMealClick = async (mealId) => {
    const mealDetails = await fetchMealDetails(mealId);
    setSelectedMeal(mealDetails);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-zinc-800">Meal Ideas for "{ingredient}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => handleMealClick(meal.idMeal)}>
            <img className="w-full h-48 object-cover" src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{meal.strMeal}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedMeal && (
        <div className="p-4 mt-4 bg-gray-900 rounded-lg">
          <h3 className="text-xl font-bold text-white">{selectedMeal.strMeal}</h3>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-32 h-32 rounded-lg mx-auto my-4" />
          <ul className="list-disc list-inside text-white">
            {Object.keys(selectedMeal)
              .filter((key) => key.startsWith('strIngredient') && selectedMeal[key])
              .map((key, index) => (
                <li key={index}>{selectedMeal[key]} - {selectedMeal[`strMeasure${key.slice(13)}`]}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MealIdeas;









