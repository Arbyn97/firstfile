import React from 'react';

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={color:"red" , name:props.name};
  }
  render(){
    console.log(this.props.name)
    return(  <React.Fragment>
      <h1>hello {this.state.name}</h1>
      <p>webpage</p>
      </React.Fragment>)
    
    
  }
}

export default App;
