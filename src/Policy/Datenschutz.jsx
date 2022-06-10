import React from 'react'

function Datenschutz() {
    const clickHome=()=>{

        window.location.assign("/")



    }
    const jahr=()=>{
    const Datum1=new Date()
    const Jahr=Datum1.getFullYear();

    return `${Jahr}`

    }
  return (
    <div>
        
        <h1>Datenschutz</h1>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus aut provident sint magnam alias minus unde ipsa quaerat! 
            Reiciendis, 
            quasi fugit. Quis corrupti sit minus harum voluptatem neque inventore numquam.</p>

<footer style={{justifyContent:"space-between",margin:"10px"}}>

<a onClick={clickHome}>Home</a>
<a>Impressum</a>


<i>Momo ReactDev {jahr(new Date())}</i>


</footer>

    </div>
  )
}

export default Datenschutz