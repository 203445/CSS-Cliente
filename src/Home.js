import React, {Component} from "react";
class Home extends  Component {
    render()
    {
        const containerStyle = {

            width: "10000px",
            height: "1000px",
        };
        return <div>
          <div style={containerStyle} className="opacity-50">
             <div className="d-flex justify-content-center">
                 <h1 style={{color: "white"}}>Hola! Bienvenido</h1>
                 <div className="container">
                     <h1 style={{color: "white"}}>Hola! Bienvenido</h1>
                 </div>
             </div>
         </div>
        </div>;

    }

}
export default Home;