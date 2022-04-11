import './App.css';
import React from "react";
import PersonList from "./Component/PersonList"
import PersonAdd from "./Component/PersonAdd"
import PersonRemove from "./Component/PersonRemove"

function App() {

  return(
   <div className="App">
     <PersonAdd />
     <PersonList/>
     <PersonRemove />
   </div> 
  )
  
  
  
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
