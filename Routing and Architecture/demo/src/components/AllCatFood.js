import React from 'react';

const AllCatFood = ({ match }) => (
    <h1>All available cat food {match.params.foodid}</h1>
)

export default AllCatFood;
