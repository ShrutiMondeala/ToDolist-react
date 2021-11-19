import react, { Component } from 'react';
import './InputContainer.css'

class InputContainer extends Component{
    constructor(porps){
        super();
        this.state = {
            newTask: " " 
        }
    }

   
    render(){

        return(
            <div>
                <input
                className="Inputcontainer" 
                placeholder="Enter Tak Here...."
                value = {this.state.task}
                onChange= {(e) => this.setState({newTask: e.target.value})}></input>
                <button className='btn'
                onClick = {()=> this.props.addItem(this.state.newTask)}>Click</button>
            </div>
        )
    }
};

export default InputContainer