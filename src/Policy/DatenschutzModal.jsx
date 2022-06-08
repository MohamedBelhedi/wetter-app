import React,{Component} from 'react'
import CookieConsent from 'react-cookie-consent'

class DatenschutzModal extends Component {
    constructor(){
    super()



    }

     mouseClick=()=>{
        
        alert("Du machst hier nicht weiter Stopp, vielen dank für dein Besuch")


    }

    render(){

    
  return (
    <div>

<CookieConsent
       enableDeclineButton
       declineButtonText={"möchte ich nicht"}
  location="bottom"
  buttonText="Ok"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={90}
  
>
  Diese Seite nutzt evtl. Cookies die dazu dienen um die Seite Ordnungsgemäß anzuzeigen, um
  die bedinung dieser Seite zu vereinfachen nähres kannst du, aus der Datenschutzerklärung entnehmen.
 

</CookieConsent>


    </div>
  )
}
}
export default DatenschutzModal