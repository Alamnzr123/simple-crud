import './App.css';
import React from "react";
import Request from "./Component/Request";
import axios from "axios";
// import { Routes, Route, Link } from "react-router-dom";
// import AddTutorial from "./Component/AddTutorial";
// import Tutorial from "./Component/Tutorial";
// import TutorialsList from "./Component/TutorialList";

function App() {
  
  axios.get('https://crudcrud.com/api/19eea68b6b88444d8111b78c96766153')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

  
  
  
  // return (

  //   <div>
  //   <nav className="navbar navbar-expand navbar-dark bg-dark">
  //     <a href="/tutorials" className="navbar-brand">
  //       bezKoder
  //     </a>
  //     <div className="navbar-nav mr-auto">
  //       <li className="nav-item">
  //         <Link to={"/tutorials"} className="nav-link">
  //           Tutorials
  //         </Link>
  //       </li>
  //       <li className="nav-item">
  //         <Link to={"/add"} className="nav-link">
  //           Add
  //         </Link>
  //       </li>
  //     </div>
  //   </nav>
  //   <div className="container mt-3">
  //     <Routes>
  //       <Route path="/" element={<TutorialsList/>} />
  //       <Route path="/tutorials" element={<TutorialsList/>} />
  //       <Route path="/add" element={<AddTutorial/>} />
  //       <Route path="/tutorials/:id" element={<Tutorial/>} />
  //     </Routes>
  //   </div>
  // </div>


  // );
}

export default App;
