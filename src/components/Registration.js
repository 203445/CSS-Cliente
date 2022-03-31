import { useState} from "react";
import axios from "axios";


const Registration = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [pword, setPword] = useState()
    const [pword2, setPword2] = useState()
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()

    const pos = (urlPostLog) => {

        axios.post(urlPostLog, {
            'username': username,
            'password': pword,
            'password2': pword2,
            'email':email,
            'first_name': firstname,
            'last_name': lastname,

        }, {Headers: {"Content-Type": "application/json",},})
            .then((response) => {
                // console.log(response.data.token)
                const token = response.data['token'];
                localStorage.setItem("token", token);
                localStorage.getItem('token');
                console.log(response.data);
                window.location = "/login";
            })
            .catch((error) => {
                console.log(error.response.data)
                alert("Verifique los datos");
            })

    }
    function showC() {
        var inpt = document.getElementById("pass");
        var inpt2 = document.getElementById("pass2");
        if(inpt.type === "password" || inpt2.type  === "password"){
            inpt.type = "text";
            inpt2.type = "text";
        }else{
            inpt.type = "password";
            inpt2.type = "password";
        }
    }
    return(
        <div >
            <div>
                <div className="hr2"></div>
                <div className="login-wrap2">
                    <div className="login-html" style={{padding : "40px 70px 50px"}}>
                        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked={"checked"}/>
                        <label htmlFor="tab-1" className="tab">Iniciar sesión</label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Username</label>
                                    <input id="user" type="text" className="input" name="username" placeholder="Usuario"  onChange={e => setUsername( e.target.value)} />
                                </div>
                                <div className="group">
                                    <label htmlFor="user" className="label">First Name</label>
                                    <input id="user" type="text" className="input" name="first_name" placeholder="Nombre"  onChange={e => setFirstname( e.target.value)} />
                                </div>
                                <div className="group">
                                    <label htmlFor="user" className="label">Last Name</label>
                                    <input id="user" type="text" className="input" name="last_name" placeholder="Apellido"  onChange={e => setLastname( e.target.value)}/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input" name="password" onChange={e => setPword( e.target.value)}/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Repeat Password</label>
                                    <input id="pass2" type="password" className="input"  name="password2" onChange={e => setPword2( e.target.value)}/>
                                </div>
                                <div className="group">
                                    <input id="check" type="checkbox" className="check"  onClick={showC}/>
                                    <label htmlFor="check"><span className="icon"></span>Ver contraseña</label>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Email Address</label>
                                    <input id="pass" type="text" className="input" name="email" placeholder="@email.com" onChange={e => setEmail( e.target.value)}/>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up" onClick={()=> pos("http://localhost:8000/api/v2/register/")}/>
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <label htmlFor="tab-1"/><a href="/login">Ya tienes cuenta?</a>
                                </div>
                                <div className="hr"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hr"></div>
            </div>
        </div>
    );
}

export default Registration;