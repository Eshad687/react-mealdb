import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Meals = (props) => {

    const element = <FontAwesomeIcon icon={faPlus} />
    const { strMealThumb, strMeal, strInstructions } = props.meal;
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow">
                    <img src={strMealThumb} className="card-img-top p-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{strMeal}</h5>
                        <p className="card-text">{strInstructions.slice(0, 100)}</p>
                    </div>
                    <button onClick={() => props.handleSelectedMeal(strMeal)} type="button" className="btn btn-info text-white m-2">Add to list {element}</button>
                </div>
            </div>

        </div>
    );
};

export default Meals;