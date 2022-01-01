import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useState, useCallback, useEffect } from 'react';
import useHttp from '../../hooks/use-http';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  
  const transformMeals = useCallback((data) => {
    const loadedMeals = [];
    for (const mealKey in data) {
      loadedMeals.push({
        id: mealKey,
        name: data[mealKey].name,
        description: data[mealKey].description,
        price: data[mealKey].price,
      });
    }
    setMeals(loadedMeals);
  },[]);

  const {isLoading, error, sendRequest: fetchMeals} = useHttp();

  useEffect(() => {
    fetchMeals({ url: "https://react-http-5c577-default-rtdb.firebaseio.com//meals.json" },
      transformMeals);
  },[]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    
    <section className={classes.meals}>
      {isLoading && <p className={classes.MealsLoading}>loading...</p>}
      {error && <p className={classes.MealsError}>Error while fetching the meals</p>}
      {!isLoading && !error && mealsList.length === 0 && <p className={classes.MealsLoading}>No Meals found</p>}
      {!isLoading && !error && mealsList.length !== 0 && (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
