import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast} from "react-toastify";

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
      });
      const navigate  = useNavigate();
      const {storeTokenInLS} = useAuth();
    
    //   const navigate = useNavigate();
    
      // let handle the input field value
      const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
      };
      const handleSubmit = async(e)=>{
        e.preventDefault();
        // alert(user);
        try {
          const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          const res_data = await response.json();
          console.log("response data : ", res_data);
          if (response.ok) {
            
            // console.log("res from server", res_data);
            toast.success("Login Successful");

            storeTokenInLS(res_data.token);
            setUser({ username: "", email: "", phone: "", password: "" });
            navigate("/")
            // console.log(responseData);
          } else {
            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);

          }
        } catch (error) {
          console.error("Error", error);
        }
      }
  return (
    <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image reg-img">
              <img
                src="/images/register.png"
                alt="a nurse with a cute look"
                width="400"
                height="500"
              />
            </div>
            {/* our main registration code  */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">Login form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="email"
                  />
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="password"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  </>
  )
}

export default Login