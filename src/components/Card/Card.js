import React from 'react';

const Card = (props) => {
    console.log(props);
    const { strCategoryThumb, strCategory, strCategoryDescription } = props.food
    return (
        <div>
            <div class="card">
                <img src={strCategoryThumb} class="card-img-top img-fluid w-25" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{strCategory}</h5>
                    <p class="card-text">{strCategoryDescription.slice(0, 100)}</p>
                    <a href="/btn" class="btn btn-primary">Add To Bag</a>
                </div>
            </div>
        </div>
    );
};

export default Card;