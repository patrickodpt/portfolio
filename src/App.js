import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core'
import Home from './Components/Home.js'
import './App.css';

console.log("HEY! If you're looking at this you probably know about a decent job for an entry level developer. If so, hit me up on linkedIn. :)");

function App() {
  return (
    <Fragment>
      <CssBaseline/>
      <Home/>
    </Fragment>
  );
}

export default App;
