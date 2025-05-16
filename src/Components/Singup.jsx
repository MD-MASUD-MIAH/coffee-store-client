import React, { use } from 'react';
import { AuthContext } from './context/AuthContext';
import Swal from 'sweetalert2';

const Singup = () => {


    const {createUser} = use(AuthContext)

   
    
    const handlecreate = (e)=>{

        e.preventDefault() 
    const frm = e.target 

    const ForData = new FormData(frm)  

   const {email,password,...rest} = Object.fromEntries(ForData.entries())
    

 
   
    
    createUser(email,password).then(res=>{

        console.log(res.user);

          const useProfile = {

    ...rest, 
    email ,
    creationTime: res.user?.metadata?.creationTime ,
   lastSignInTime: res.user?.metadata?.lastSignInTime


   }


   
    fetch('http://localhost:4000/user',{

   method:'POST',
   headers:{

    'content-type' : 'application/json'
   },
   body:JSON.stringify(useProfile)

    }).then(res=>res.json()
    ).then(data=>{

        Swal.fire({
  title: "Sing IN Successfully!",
  icon: "success",
  draggable: true
});
        console.log('after add ed',data);
        
    })
        
    }).catch(error=>{


        console.log(error);
        
    })



    }
    return (
         <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card md:px-24 w-full shrink-0 shadow-2xl">
      <div className="card-body">

           <h1 className="text-5xl font-bold">Sing Up!</h1>
        <form onSubmit={handlecreate} className="fieldset">
          <label className="label">Name</label>
          <input type="text"
           name='name'
          className="input" placeholder="name" /> 

          <label className="label">Address</label>
          <input type="text"
           name='address'
          className="input" placeholder="address" /> 


          <label className="label">Phone</label>
          <input type="number"
           name='phone'
          className="input" placeholder="phone" /> 
          <label className="label">Photo URL</label>
          <input type="text"
           name='photo'
          className="input" placeholder="photo" /> 




          <label className="label">Email</label>
          <input type="email"
           name='email'
          className="input" placeholder="Email" />
        
        
        
        
        
          <label className="label">Password</label>
          <input type="password" className="input" 
          name='password'
          placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sing Up</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Singup;