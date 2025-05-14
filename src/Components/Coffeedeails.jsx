import React from 'react';
import { useLoaderData } from 'react-router';

const Coffeedeails = () => {

const coffee = useLoaderData()
    

  console.log(coffee);
    
    return (
        <div>
            <h1>I am Details</h1>
<img src={coffee.photo} alt="" />
        </div>
    );
};

export default Coffeedeails;