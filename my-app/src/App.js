import React, { Component } from 'react'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      personne:{
    Name:"Fares",
    Bio:"TEST TEST",
    imgSrc:"https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    Profession:"Web developer"},

    show:false
    }
    
    
  };
  
  toggle=()=>{
    this.setState({show: !this.state.show})
  }
  render()
  {
    const {personne,show}=this.state;
    return (
      <div>
        <button style={{marginLeft:"50%"}} onClick={()=>this.toggle()}>Show</button>
        {show && (<div><h1>{personne.Name}</h1>
        <h1>{personne.Bio}</h1>
        <h1>{personne.Profession}</h1>
        <img src={personne.imgSrc}/>
        </div>)}
        
        
        
      </div>
    )
  }
}
