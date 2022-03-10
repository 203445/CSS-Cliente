import { useState} from "react";
import axios from 'axios';
import React from 'react';
// import {Link} from  "react-router-dom";
import "./estilo.css";

const Login = () => {
    const [username, setUsername] = useState()
    const [pword, setPword] = useState()

    // useEffect(() => {
    //     localStorage.setItem('token',null);
    //     localStorage.setItem('idus',null);
    // }, [])// eslint-disable-line react-hooks/exhaustive-deps


    const post = (urlPostLog) => {

        axios.post(urlPostLog, {
            'username': username,
            'password': pword
        }, {Headers: {"Content-Type": "application/json",},})
            .then((response) => {
                console.log(response.data.token)
                const token = response.data['token'];
                const idus = response.data['user_id'];
                localStorage.setItem("username", response.data.username);
                localStorage.setItem("firstN", response.data.first_name);
                localStorage.setItem("lastN", response.data.last_name);
                localStorage.setItem("emailU", response.data.email);
                localStorage.setItem("token", token);
                localStorage.setItem("idus", idus);

                window.location = "/profile";
            })
            .catch((error) => {
                console.log(error.response.data, pword[0])
                console.log(error.response.data, username[0])
                alert("Verifica los datos");
            })
    }
    // style={containerStyle}
    return(

        <div>
            <div className="hr2"></div>
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked={"checked"}/>
                    <label htmlFor="tab-1" className="tab">Iniciar sesión</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" name="username" onChange={e => setUsername( e.target.value)}/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" name="password" onChange={e => setPword( e.target.value)}/>
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" defaultChecked={"checked"}/>
                                    <label htmlFor="check"><span className="icon"></span> Mantener sesión</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In" onClick={()=>post('http://localhost:8000/api/v1/login/')}/>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    );
}

export default Login;