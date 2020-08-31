import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Employee from './components/employees/Employee';
import Departement from './components/departments/Department';
import Abscence from './components/abscences/abscence';
import AddEmployee from './components/employees/AddEmployee';
import modifyEmployee from './components/employees/modifyEmployee';
import detailsEmployee from './components/employees/detailsEmployee';
import AddDepartement from './components/departments/AddDepartement';
import AddAbscence from './components/abscences/addAbscence';
import EditDepartment from './components/departments/editDepartment';
import EditAbscence from './components/abscences/editAbscence';

function App() {
  return (
    <Router>
    <div class="App">
      <Navbar />
      <div class="container-fluid page-body-wrapper">
      <div class="row row-offcanvas row-offcanvas-right">
      <div class="content-wrapper" style={{backgroundColor: "white"}}>
        <Route path='/employee' component={Employee}/>
        <Route path='/departement' component={Departement}/>
        <Route path='/abscence' component={Abscence}/>  
        <Route path='/addEmployee' component={AddEmployee}/>
        <Route path='/modifyEmployee/:id' component={modifyEmployee}/>
        <Route path='/detailsEmployee/:id' component={detailsEmployee}/>    
        <Route path='/addDepartment' component={AddDepartement}/>     
        <Route path='/addAbscence' component={AddAbscence}/>      
        <Route path='/editDepartment/:id' component={EditDepartment}/>  
        <Route path='/editAbscence/:id' component={EditAbscence}/>      
</div>
</div></div>
    </div>
    </Router>
  );
}
export default App;