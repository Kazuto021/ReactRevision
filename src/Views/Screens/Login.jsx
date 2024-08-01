import React, { useEffect, useState } from 'react'

import "./Styles/LoginScreen.scss"
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const nav = useNavigate();
    // useState hook declaration and initialization
    const [data, setData] = useState({
        username:"",
        pwd:""
    });
    const dataHandler = (e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const dataFetcher = ()=>{
        console.log(data)
    }
    const navigator = ()=>{
        nav("/signup")
    }

    useEffect(()=>{
        console.log(data)
    },[data])


    return (
        <div className='container'>
            <div className='child-div'>
                <h2>Login</h2>
                <form method="post" >

                    <label htmlFor="username">Username</label>

                    <input id="usernamne" type="text" name="username" placeholder='username' value={data.username} onChange={dataHandler}/>

                    <label htmlFor="pwd">Password</label>
                    <input id="pwd" type="password" name="pwd" placeholder='password' value={data.pwd} onChange={dataHandler}/>

                    <button onClick={dataFetcher} >Login</button>
                    <p>New to this website? Consider <span style={{cursor:"pointer",color:"blue"}}onClick={navigator}>sign up</span></p>

                </form>

            </div>
        </div>
    )
}

export default Login