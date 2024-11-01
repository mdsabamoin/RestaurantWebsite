import React,{Fragment} from "react";
// import logo from './logo.svg';
import classes from './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/meals.js";
function App() {
  return (<Fragment className={classes.App}>
    <Header/>
    <main>
    <Meals/>
    </main>
    
  </Fragment>
  );
}

export default App;
