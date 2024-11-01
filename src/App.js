import React,{Fragment} from "react";
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
function App() {
  return (<Fragment>
    <Header/>
    <MealsSummary/>
  </Fragment>
   
  );
}

export default App;
