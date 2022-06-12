import React,{useState}from 'react';
// setState immer im import
import './App.css';
import Page from './page/Page';
import { Routes,BrowserRouter as Router,Route } from 'react-router-dom';
import Datenschutz from './Policy/Datenschutz';






function App() {
 

return (

  <Router>
  <Routes>
    <Route path={process.env.PUBLIC_URL +"/"} element={<Page/>} exact/>
<Route  path={"/datenschutz"} element={<Datenschutz/>} exact />

  </Routes>

</Router>

  );
}

export default App;
