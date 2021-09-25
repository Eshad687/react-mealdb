import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import SelectedMealList from '../SelectedMealList/SelectedMealList';
import './Main.css'

const Main = () => {
    const [meals, setMeals] = useState([]);

    const [selectedMeal, setSelectedMeal] = useState([]);

    const [searchedMeal, setSearchedMeal] = useState("");
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${searchedMeal ? `s=${searchedMeal}` : `f=a`}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchedMeal]);

    const handleSelectedMeal = (mealName) => {
        const updatedSelectedMeal = [...selectedMeal, mealName];
        setSelectedMeal(updatedSelectedMeal);


    }
    const searchEventHandler = (event) => {
        setSearchedMeal(event.target.value);

    }
    return (
        <>
            <div className="bg-primary text-center seach-field ">
                <input onChange={searchEventHandler} className="input m-2 border-0 rounded-3" type="text" placeholder="Search Foods..." />
            </div>

            <div className="mt-2 container">
                <div className="row">
                    <div className="col-10">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {meals != null ? meals.map(meal => <Meals
                                key={meal.idMeal}
                                meal={meal}
                                handleSelectedMeal={handleSelectedMeal}
                            ></Meals>) : ''}
                        </div>

                    </div>
                    <div className="col-2 border-start border-info">
                        <h3>Ordered Food:</h3>
                        {
                            selectedMeal.map((meal, index) => <SelectedMealList
                                key={index}
                                meal={meal}></SelectedMealList>)
                        }

                    </div>
                </div>
            </div>

        </>
    );
};

export default Main;