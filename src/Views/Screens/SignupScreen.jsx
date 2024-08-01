import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignupScreen = () => {
    const nav = useNavigate();
    const loginNavigator= ()=>{
        nav("/login")
    }
    return (
        <div>

            <div>
                <form action="">
                    <input type="text" placeholder='username' />
                    <input type="email" placeholder='email'/>
                    <input type="pasword" placeholder='password'/>
                    <button>Signup</button>
                    <p>Already a user? <span style={{cursor:"pointer"}} onClick={loginNavigator}>Login</span> </p>
                </form>
            </div>

        </div>
    )
}

export default SignupScreen