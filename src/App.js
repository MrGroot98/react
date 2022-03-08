import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {counter :0 }
  }

render()
{
  return(
    <div>
      <h1>componentDidUpdate Method</h1>
      <Child data={this.state.counter}/>
      <button onClick={()=>this.setState({counter:this.state.counter+1})}>
      Click Me {this.state.counter}</button>
    </div>
  )
}
}

class Child extends React.Component
{
  constructor()
  {
    super();
    this.state = {counter :0 }
  }


componentDidUpdate(pP,pS,sS)
{
  console.log("Method is executed",pP.data,this.props.data)
}

render()
{
  return(
    <div>
      <h2>Child Component{this.props.data}</h2>
    </div>
  )
}
}
export default App;
