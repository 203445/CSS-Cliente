import Login from "./components/Login";
import Home from "./Home";
import Registration from "./components/Registration";
import Profile from "./components/Profile";
//estilos
import 'bulma/css/bulma.min.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/estilo.css";
import "./components/estilosProfile.css";


import {
    BrowserRouter as Router, Link,
    Route,
    Routes,
} from "react-router-dom";


function App() {
  return (
      <div>
          <Router>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                  <div className="container">
                      <Link className="navbar-brand" to="/">
                          <img src="https://static.vecteezy.com/system/resources/previews/002/581/814/non_2x/cute-cat-head-cartoon-logo-cat-head-good-for-cat-care-related-products-free-vector.jpg" alt="..." width="50px"/>
                      </Link>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                              aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ms-auto">
                              <li className="nav-item">
                                  <Link  className="nav-link active"  aria-current="page" to="/">Inicio</Link>

                              </li>
                              <li className="nav-item">
                                  <Link  className="nav-link active"  aria-current="page" to="/login">Entrar</Link>

                              </li>
                              <li className="nav-item">
                                  <Link  className="nav-link active"  aria-current="page" to="/registro">Registro</Link>
                              </li>
                              {/*<li className="nav-item dropdown">*/}
                              {/*    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button"*/}
                              {/*       data-bs-toggle="dropdown" aria-expanded="false">*/}
                              {/*        Dropdown*/}
                              {/*    </a>*/}
                              {/*    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">*/}
                              {/*        <li><a className="dropdown-item" >Action</a></li>*/}
                              {/*        <li><a className="dropdown-item">Another action</a></li>*/}
                              {/*        <li>*/}
                              {/*            <hr className="dropdown-divider"/>*/}
                              {/*        </li>*/}
                              {/*        <li><a className="dropdown-item" >Something else here</a></li>*/}
                              {/*    </ul>*/}
                              {/*</li>*/}
                          </ul>
                      </div>
                  </div>
              </nav>
              <Routes>
                  <Route exact path="/" element={<Home/>} ></Route>
                  <Route exact path="/login" element={<Login/>} ></Route>
                  <Route exact path="/registro" element={<Registration/>} ></Route>
                  <Route exact path="/profile" element={<Profile/>} ></Route>
              </Routes>

          </Router>
      </div>
  );
}

export default App;
