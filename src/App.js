
import React, { useState } from "react";
import LoginForm from './components/LoginForm';



function App() 
{
    const adminUser = {
                        email: "jaya@gmail.com",
                        password: "adminmmm"
                      }


    const [user, setUser] = useState({name: "", email: ""});

    const [error, setError] = useState("");


    const Login = details => {

          console.log(details);

          if(details.email == adminUser.email && details.password == adminUser.password)
          {
              console.log("Logged in");
              setUser({
                name: details.name,
                email: details.email
              });
          }
          else
          {
              setError("Details do not match !")
          }

    }


    const Logout = () => {
      setUser({ name: "", email: "" });
    }

    
    return (
              <div className="App">
                
                    {
                        (user.email != "") ? 
                        (
                            <div className="welcome">
                                <h2>Welcome, {user.name} !</h2>
                                <div></div>
                                <button onClick={Logout}>Logout</button>
                            </div>
                        ) : 
                        (
                            <LoginForm Login={Login} error={error} />
                        )
                    }

              </div>
          );
}




export default App;
