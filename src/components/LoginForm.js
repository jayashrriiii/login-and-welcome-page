


import React, { useState } from "react";




function LoginForm({ Login, error })
{
    const [details, setDetails] = useState({name: "", email: "", password: ""});


    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }


    return (
               <form onSubmit={submitHandler}>
                   {(error != "") ? ( <div className="error">{error}</div>) : ""}
                   <div className="form-inner">
                       <h2>Log in</h2>
                       <span>Log into your account</span>
                       <div className="form-group">
                            <input type="text" placeholder="Name" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                       </div>
                       <div className="form-group">
                            <input type="email" placeholder="Email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                       </div>
                       <div className="form-group">
                            <input type="password" placeholder="Password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                       </div>
                       <a href="#">Forgot your password?</a>
                       <input type="submit" value="LOG IN"></input>
                   </div>     
               </form>
           )
}



export default LoginForm