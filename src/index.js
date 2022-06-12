import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import DatenschutzModal from './Policy/DatenschutzModal';


// function alarm(){

// Swal.fire({
//   title: 'Datenschutz&Nutzunserklärung',
//   text: "Diese Seite könnte evtl. Cookies nutzen oder auch suchanfragen zu Openweather weiterleiten, wenn du damit nicht einverstanden bist dann klicke auf nein und due verlässt die Seite",
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Einverstanden',
//   cancelButtonText: 'Nein'
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire(
//       'Top!',
//       'Viele Dank jetzt kannst du die Wetterapp nutzen',
//       'success'
//     )
    
//   }
//   else if(!result.isConfirmed)
//   {
//     return window.location.assign("https://www.google.de")


//   }
// })


// }

ReactDOM.render(
  <React.StrictMode>
    <App /*onChange={alarm()}*/ />
  <DatenschutzModal/>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
