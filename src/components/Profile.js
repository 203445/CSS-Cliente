
import {useEffect, useState} from "react";
import axios from "axios";
import React from 'react';
//Estilo
 import  "./estilo.css";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';

const aux = {
    "username" : localStorage.getItem('username'),
    "first_name" : localStorage.getItem('firstN'),
    "last_name" : localStorage.getItem('lastN'),
    "email": localStorage.getItem('emailU'),

}
const Profile = () => {
    const [mostrarComponente, setMostrarComponente] = useState(true);
    const [datos, setDatos] = useState(aux)
    var imgDefaul = "https://green.excertia.com/wp-content/uploads/2020/04/perfil-empty.png"
    var token =  localStorage.getItem('token');
    var idUser =  localStorage.getItem('idus');
    const [user, setUser] = useState(aux.username);


    const config = {
      headers: { Authorization: 'Token ' + token,}
    };

    useEffect(() => {

        get();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const pos =  (urlPoslog) => {
            var prueba = document.getElementById('vista').src;
            var buton = document.getElementById('datoB').textContent;
            var ur = document.getElementById('icon-button-file').files[0];
            console.log(buton)

        if(prueba === imgDefaul && ur !== undefined) {
            console.log("post");

            let dato = new FormData ();
            dato.append('id_user', idUser);
            dato.append('url_img',document.getElementById('icon-button-file').files[0]);

            console.log(dato);
            axios.post(urlPoslog, dato, {
                    headers: {
                        'Authorization': 'Token ' + token,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            ).then((response) => {
                var dataIma = response.data.pay_load.url_img;
                get()
                console.log(dataIma)
                console.log(response.data)
            }).catch((error) => {
                console.log(error.response.data)

            });
        }
        else {
            console.log("Se actualizará su imagen");
            put()

            // }
        }
    }

    const put = () => {
        console.log(datos.username);
        var ur = document.getElementById('icon-button-file').files[0];
        console.log(ur)

        let dato = new FormData ();
        if(ur === undefined){
            dato.append('id_user', idUser);
            dato.append('username',datos.username);
            dato.append('first_name',datos.first_name);
            dato.append('last_name',datos.last_name);
            dato.append('email',datos.email);
        }else{
            dato.append('id_user', idUser);
            dato.append('url_img',document.getElementById('icon-button-file').files[0]);
            dato.append('username',datos.username);
            dato.append('first_name',datos.first_name);
            dato.append('last_name',datos.last_name);
            dato.append('email',datos.email);
        }

        console.log(dato.get("username"));
        axios.put('http://localhost:8000/api/v1/profile/'+ idUser, dato, {
                headers: {
                    'Authorization': 'Token ' + token,
                    'Content-Type': 'multipart/form-data',

                },
            }
        ).then((response) => {
            var dataIma = response.data.pay_load.url_img;
            console.log(dataIma);
            console.log(response.data);
            console.log( "AQUII");
            console.log(idUser)
            get();

        }).catch((error) => {
            console.log(error.response.data);


        });

    }
    const get =  () => {
        axios.get('http://localhost:8000/api/v1/profile/' + idUser ,config,
        ).then(response => {

            localStorage.setItem("username", response.data.username);
            localStorage.setItem("firstN", response.data.first_name);
            localStorage.setItem("lastN", response.data.last_name);
            localStorage.setItem("emailU", response.data.email);
            var uss = response.data.username;
            setUser(uss);
            console.log("si paso" );
            console.log( response.data);
            var buton = document.getElementById('datoB').textContent;
            console.log(buton)
            document.getElementById('vista').src = response.data.url_img;

            if( response.data.url_img === null){
                console.log("si lo hace")
                document.getElementById('vista').src = imgDefaul;

            }else {
                console.log("Carga la imagen anterior");
            }
            setMostrarComponente(true)
        }).catch((error) => {
            console.log(error.response.data);

        });

    }

    const handleChange = (e) =>{
        setDatos({
            ...datos,[e.target.name] : e.target.value,
        });
    }

return(

    <div className="d-flex justify-content-center" >
        <div className="hr2"></div>
        <div className="box-s">
            <h1 style={{color: "white"}}>Perfil</h1>
            <div className="d-grid gap-3" >
                <div className="columns is-mobile is-centered">
                    <div id="overlay">
                    <img src="" id="vista" alt="No se visualiza nada"  className="image"/>
                        <ul className="text">{'  '+user}</ul>
                        <div className="panel-group" id="accordion" >
                            <div className="panel panel-default" className="input-no"></div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="icon-button-file">
                            <input accept="image/*"  id="icon-button-file" type="file" className="input-no"/>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </div>
                </div>
                <div>
                    <button id="datoB" className="btn btn-dark" style={{margin: "10px"}} onClick={() => setMostrarComponente(!mostrarComponente)}>
                        {mostrarComponente ? `Editar` : `Cancelar`}</button>

                    <Button className  ="button is-dark"
                        variant="contained"
                        value="Guardar"
                        color="primary"
                        size="large" onClick={() => pos('http://127.0.0.1:8000/api/v1/profile/')}
                        startIcon={<SaveIcon/>}
                    />
                </div>

                {mostrarComponente ? (
                    <div>
                        {/*<div className="p-2 bg-light border"><p><strong>User ID: &nbsp;&nbsp;</strong>{'  '+idUser}</p></div>*/}
                        {/*<div className="p-2 bg-light border"><p><strong>Usuario &nbsp;&nbsp;</strong>{'  '+datos.username}</p></div>*/}
                        <div className="p-2 bg-light border" ><p><strong>First Name  &nbsp;&nbsp;</strong>{'  '+datos.first_name}</p></div>
                        <div className="p-2 bg-light border"><p><strong>Last Name  &nbsp;&nbsp;</strong>{'  '+datos.last_name}</p></div>
                        <div className="p-2 bg-light border"><p><strong>E-mail  &nbsp;&nbsp;</strong>{'  '+datos.email}</p></div>
                    </div>) :
                    (
                    <div>

                        <div className="p-2 bg-light border">
                            <label htmlFor="user" className="label">Username</label>
                            <input id="user" type="text" className="input" value={datos.username}  name="username" onChange={handleChange}/>
                        </div>
                        <div className="p-2 bg-light border">
                            <label htmlFor="user" className="label">First Name</label>
                            <input id="user" type="text" className="input" value={datos.first_name }  name="first_name" onChange={handleChange}/>
                        </div>
                        <div className="p-2 bg-light border">
                            <label htmlFor="user" className="label">Last Name</label>
                            <input id="user" type="text" className="input" value={datos.last_name}  name="last_name" onChange={handleChange}/>
                        </div>
                        <div className="p-2 bg-light border">
                            <label htmlFor="pass" className="label">Email</label>
                            <input id="user" type="text" className="input" value={datos.email} name="email" onChange={handleChange}/>
                        </div>

                    </div>)}
                <button  className="btn btn-dark" onClick={() =>{   localStorage.setItem('token',null);
                    window.location= "/login";}}>cerrar sesion </button>

            </div>
        </div>
    </div>
);

}
export default Profile;
