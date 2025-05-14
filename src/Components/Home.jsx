import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

import CoffeeCard from './CoffeeCard';

const Home = () => {

    const coffeData = useLoaderData() 

    console.log(coffeData);
    

    const [coffees,setCoffees] = useState(coffeData)
   
    
    return (
        <div>

             

             <div className='grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen mt-10'>
                {

                   coffees?.map(coffee=><CoffeeCard key={coffee._id}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee}></CoffeeCard>)
                }
             </div>
        </div>
    );
};

export default Home;