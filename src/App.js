import './App.css';
import Header from'./components/header.js';
import './App.css';
import Footer from './components/Footer.js';
import InputContainer from './components/InputContainer.js';
import List from './components/List.js';
import Button from '@mui/material/Button';
import { Component } from 'react';

class App extends Component{
constructor() {
  super();
  this.state = {
    items : ["Go to college", "Learn FrontEnd", "Eat brekfast"]
}
}
addItem(newItem){ //for the button , call comes here from button so we created an automomus function
  this.setState({
      items : [...this.state.items, newItem]
  })
}
  render(){
  return (
    <div className='app'>
      <Header/>
      <InputContainer addItem ={this.addItem.bind(this)}/>
      <List items= {this.state.items}/>
      <Footer/>
      <br/>
      <Button variant="outlined" size="small">Outlined</Button>
    </div>
  );
  }
}

export default App;
