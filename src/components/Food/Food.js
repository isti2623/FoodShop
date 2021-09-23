import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Food = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => res.json())
            .then(data => setFoods(data.categories))
    }, [])

    return (
        <div>
            {
                foods.map(food =>
                    <Card
                        key={food.idCategory}
                        food={food}>
                    </Card>)
            }

        </div>
    );
};

export default Food;