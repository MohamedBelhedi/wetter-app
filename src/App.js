import React,{useState}from 'react';
// setState immer im import
import './App.css';

import { getSunrise, getSunset } from 'sunrise-sunset-js';
import DatenschutzModal from './Policy/DatenschutzModal';
import CookieConsent from 'react-cookie-consent';
import Datenschutz from './Policy/Datenschutz';
import { Routes,BrowserRouter as Router,Route } from 'react-router-dom';



const api={
  key:'8d3a4c2ff73ef6bcb19e913e835f26c7',
  base:'https://api.openweathermap.org/data/2.5/'

}
function App({mouseClick}) {
 
  const [query,setQuery]=useState('');
  const [wetter,setWetter]=useState({});
  const[sonneuntergang,setSonnenUntergang]=useState({});
// bitte anwenden der Node js kurs app mit den Geodaten
  const suche=evt=>{
    if(evt.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=de`)
      .then(res=>res.json())
      .then(result=>{
        setWetter(result);
        setQuery('');
        setSonnenUntergang(result);
        console.log(result)
      
      }).catch(err=>{
        console.log("Fehler",err)




      })
      
   
      
    }
  }


  const Datum=(d)=>{
    let monate=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","Novembe","Dezember"]
    let tage=["Sonntag","Montag","Dienstg","Mittwoch","Donnerstag","Freitag","Samstag"]
    
  // denke die Get der Monate immer auf english kein Dotsch 😁
    let tag=tage[d.getDay()];
    let datum=d.getDate();
    let monat=monate[d.getMonth()];
    let jahr=d.getFullYear();
    let hour=d.getHours();
    let s = d.getSeconds();
    let m = d.getMinutes();
    // setInterval(d,1000)
    

    return`${tag} ${datum} ${monat} ${jahr} ${hour}:${m} Uhr`
  
    
  
  }
  const ondtsch=()=>{

window.location.assign("/datenschutz")

  }

  const Zeit=()=>{

   
    const date=new Date()
    const datumzeit=document.querySelector(".zeitDatum")

    datumzeit.innerText=date

    setInterval(Zeit,1000)

  


  



  }



 


  return (
    <div className={(typeof wetter.main!="undefined")? ((wetter.main.temp < 16)? 'app deser':'app'):'app'} >
     <main>
     <div className="suchbox">
       <input 
       type="text"
       className="suchanfrage"
       placeholder="suchen..." 
       onChange={e=>setQuery(e.target.value)}
       value={query}
       onKeyPress={suche}
       
       />
     </div>
     {/* {(typeof wetter.main !="undefined")%(alert("Die Stadt existiert nicht"))}  diese UZeile löschen */}
    
        {(typeof wetter.main !="undefined") ?(
          
       <div>

<div className="location-box">
        <div className="location">{wetter.name},{wetter.sys.country}
          <div className="date">{Datum(new Date())}
          <div className="zeitDatum"></div>

          </div>

         

          
        </div>
        </div>
      
      <div className="wetterbox">
        <div className="temp">
          {Math.round(wetter.main.temp)}°C
        </div>
        <div className="wetter">
          {wetter.weather[0].description}
          
</div>
<div className="sonnenaufgang">
  <div className="sonneauf"> 🌞Sonnenaufgang {new Date(wetter.sys.sunrise*1000).toLocaleTimeString('de')}</div>
  {wetter.weather.description}
</div>
<div className="sonnenuntergang">
  <div className="sonneunter"> 🌅Sonnenuntergang {new Date(wetter.sys.sunset*1000).toLocaleTimeString('de')}</div>
  {wetter.weather.description}
</div>
        </div>
        <br />
        <div className="windgesch">
  <div className="wind">Feuchtigkeit 🌫 {Math.round(wetter.main.humidity)} %</div>
  {wetter.weather.description}
</div>
<div className="windgesch">
  <div className="wind">Wind 🌪 {Math.round(wetter.wind.speed)} Km/h</div>
  {wetter.weather.description}
</div>
<div className="windgesch">
  <div className="wind">Gefühlt {Math.round(wetter.main.feels_like)} °C</div>
  {wetter.weather.description}
</div>
       </div>
      
      ):(typeof wetter.name!="undefined")||(
        <>
    <h1 className="wrongCity">Bitte Etwas suchen... oder Stadt existiert nicht</h1>
 
  <div className="wrongCity">{Datum(new Date())}</div>
</>
    
    )}
     </main>

     <Router>
       <Routes>
         <Route path={process.env.PUBLIC_URL +"/"} exact/>
    <Route  path={"/Datenschutz"} element={<Datenschutz/>} exact />
    {/* <Route  path={"/Impressum"} element={<Impressum/>}></Route>
    <Route  path={"*"} element={<NotFound/>}></Route> */}

       </Routes>
    
     </Router>

<a onClick={ondtsch}>Datenschutz</a>

    </div>
   

  );
}

export default App;
