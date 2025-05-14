import React from 'react';
import Swal from 'sweetalert2';

const Addcoffee = () => {


    const handlesumit = (e)=>{

       e.preventDefault()
    
       const form = e.target 

       const formData = new FormData(form) 

       const newCoffee = Object.fromEntries(formData.entries()) 

       console.log(newCoffee);
  
       fetch('http://localhost:4000/coffee',{

        method:"POST",
        headers:{


            'content-type' :'application/json' 


        },
        body:JSON.stringify(newCoffee)
       }).then(res=>res.json()).then(data=>{


        if(data.insertedId){

            Swal.fire({
  title: "Coffee Added!",
  icon: "success",
  draggable: true, 
  timer:1500
});

console.log('after data add',data);

        }

        
       })

    }


    return (
        <div>
            <div className="min-h-screen  flex flex-col items-center px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#374151] mb-4">
        <span className="font-cursive">Update Existing Coffee Details</span>
      </h2>
      <p className="max-w-xl text-center text-gray-600 mb-8">
      It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
      </p>

      <form  onSubmit={handlesumit} className="w-full max-w-4xl bg-[#f4f3f0] p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Name</label>
          <input
          name='name'
            type="text"
            defaultValue="Americano Coffee"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Quantity</label>
          <input 
              name='quantity'
            type="text"
            defaultValue={4}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Supplier</label>
          <input
          name='supplier'
            type="text"
            defaultValue="Cappu Authorizer"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Taste</label>
          <input
            name='taste'
            type="text"
            defaultValue="Sweet and hot"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Price</label>
          <input
            type="text"
              name='price'
            defaultValue={`$54`}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Details</label>
          <input
            type="text"
              name='details'
            defaultValue="Espresso with hot water"
            className="input input-bordered w-full"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Photo</label>
          <input
            name='photo'
            type="text"
            defaultValue="https://i.ibb.co/PGqMPr9/11.png"
            className="input input-bordered w-full"
          />
        </div>

        <div className="md:col-span-2 text-center">
          <button className="btn bg-[#D2B48C] hover:bg-[#caa57a] w-full text-black font-semibold">
            Update Coffee Details
          </button>
        </div> 


      </form>
    </div>
        </div>
    );
};

export default Addcoffee;