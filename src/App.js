import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import React from "react";
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import { makeStyles } from '@material-ui/core/styles';


function App() {

//add Martial UI

  const useStyles = makeStyles({
    App: {
      backgroundColor: '#14161a',
      color: 'white' ,
      minHeight:"200vh"
    },
  });

  const classes = useStyles();




  return (
    <BrowserRouter>
    <div className={classes.App}>
         <Header/>
         <Route path="/" component = {Homepage}  exact/>
         <Route path="/coins/:id" component = {Coinpage} />


       


   </div>

    </BrowserRouter>

  );
}

export default App;
