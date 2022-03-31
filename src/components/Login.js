import { useState} from "react";
import axios from 'axios';
import "./estilo.css";

const Login = () => {
    const [username, setUsername] = useState()
    const [pword, setPword] = useState()

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
                console.log(error.response.data, pword)
                console.log(error.response.data, username)
                alert("Verifica los datos");
            })
    }
    function showC() {
        var inpt = document.getElementById("pass");
        if(inpt.type === "password"){
            inpt.type = "text";
        }else{
            inpt.type = "password";
        }
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
                                <input id="pass" type="password" className="input"  name="password" onChange={e => setPword( e.target.value)}/>
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" onClick={showC}/>
                                    <label htmlFor="check"><span className="icon"></span>Ver contraseña</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In" onClick={()=>post('http://localhost:8000/api/v1/login/')}/>
                            </div>
                            <div className="hr"></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    );
}

export default Login;