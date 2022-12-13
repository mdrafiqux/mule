import {NavLink, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import Accessmanagement from "./pages/Accessmanagement";
import Apimanager from "./pages/Apimanager";
import Runtimemanager from "./pages/Runtimemanager";
import Apigovernance from "./pages/Apigovernance";
import Visualizer from "./pages/Visualizer";
import Monitoring from "./pages/Monitoring";



function App() {
  return (
    <>
 <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
  <div className="container-fluid">
    
<div className="container">
    <header className="d-flex justify-content-center py-1">
      <ul className="nav nav-pills">
         <li className="nav-item"><NavLink className="nav-link"  to='/home' >Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/accessmanagement'>Access Management</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/apimanager'>API Manager</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/runtimemanager'>Runtime Manager</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/apigovernance'>API Governance</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/visualizer'>Visualizer</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/monitoring'>Monitoring</NavLink></li>
      </ul>
    </header>
  </div>
{/* 
    <div className=" navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
       <li className="nav-item"><NavLink className="nav-link"  to='/' >Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/accessmanagement'>Access Management</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/apimanager'>API Manager</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/runtimemanager'>Runtime Manager</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/apigovernance'>API Governance</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/visualizer'>Visualizer</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/monitoring'>Monitoring</NavLink></li>
      </ul>
    </div> */}
  </div>
</nav>
   <Routes>
    <Route path='/home' exact  element={<Home/>}></Route>
    <Route path='/accessmanagement' exact  element={<Accessmanagement/>}></Route>
    <Route path='/apimanager' exact  element={<Apimanager/>}></Route>
    <Route path='/runtimemanager' exact  element={<Runtimemanager/>}></Route>
    <Route path='/apigovernance' exact  element={<Apigovernance/>}></Route>
     <Route path='/visualizer' exact  element={<Visualizer/>}></Route>
     <Route path='/monitoring' exact  element={<Monitoring/>}></Route>
   </Routes>
   </>
  )
}

export default App