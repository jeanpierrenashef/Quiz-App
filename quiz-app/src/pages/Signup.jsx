import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


const Signup=() => {
    const Navigate = useNavigate();
    const [error, setError] = useState("")
    const [SignupForm, setSignupForm] = useState({
        username: "",
        password: "",
    });
    useEffect(()=>{
    },[SignupForm])


    return(
        <div className="auth-container">
            <form className="auth-form">
                <h1>Signup</h1>
                <input type="text" placeholder="Username" onChange={(e)=>{
                    setSignupForm({
                        ...SignupForm,
                        username: e.target.value,
                    });
                }}/>
                <input type="password" placeholder="Password" onChange={(e)=>{
                    setSignupForm({
                        ...SignupForm,
                        password:e.target.value,
                    });
                }}/>
                <button type="button" onClick={()=>{
                    // setError("");
                    // const data = new FormData();
                    // data.append("username", SignupForm.username)
                    // data.append("email", SignupForm.email)
                    // data.append("password", SignupForm.password)

                    axios.post("http://127.0.0.1:8080/auth/register",{
                        username: SignupForm.username,
                        password: SignupForm.password,
                    }).then((response)=>{
                        console.log(response.data.user)
                        localStorage.setItem("token", response.data.token)
                        setSignupForm({
                            username: "",
                            password: "",
                        });
                        Navigate("/")
                    }).catch((error)=>{
                        setError(error.response.data.status)
                    });
                }}>Signup</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
};
export default Signup;