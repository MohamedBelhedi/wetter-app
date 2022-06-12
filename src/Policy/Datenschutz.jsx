import React,{Component} from 'react'


class Datenschutz extends Component{
    
    constructor(){
        super()


    }
    
    
    
    clickHome=()=>{

        window.location.assign("/")



    }
     jahr=()=>{
    const Datum1=new Date()
    const Jahr=Datum1.getFullYear();

    return `${Jahr}`

    }

    render(){
  return (
    <div>
        
        <h1>Datenschutz</h1>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus aut provident sint magnam alias minus unde ipsa quaerat! 
            Reiciendis, 
            quasi fugit. Quis corrupti sit minus harum voluptatem neque inventore numquam.</p>

<footer style={{justifyContent:"space-between",margin:"10px"}}>

<a onClick={this.clickHome}>Home</a>
<a>Impressum</a>


<i>Momo ReactDev {this.jahr(new Date())}</i>


</footer>

    </div>
  )
}
}

export default Datenschutz