import React, { use } from 'react';
import { AuthContext } from './context/AuthContext';

const SingIn = () => {

  const { singInUser} = use(AuthContext)

  const hadleSing = (e)=>{

    e.preventDefault() 
     
    const frm = e.target 
    const frDAta = new FormData(frm) 
    const email = frDAta.get('email') 
    const password = frDAta.get('password') 

    console.log(email, password )
    

singInUser(email,password).then(res=>{

  console.log(res); 

  const singInfo = {

    email,
    lastSignInTime:res.user?.metadata?.lastSignInTime




  }

  fetch('http://localhost:4000/user',{

    method:'PATCH',
    headers:{

      'content-type' :'application/json'
    },
    body:JSON.stringify(singInfo)
  }).then(res=>res.json()).then(data=>{


    console.log('after data pectch',data);
    
  })
  
}).then(data=>{

  console.log(data);
  
})
   
  }
    return (
       <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card px-24 w-full shrink-0 shadow-2xl">
      <div className="card-body">

           <h1 className="text-5xl font-bold">Sing In!</h1>
        <form onSubmit={hadleSing} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sing In</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default SingIn;