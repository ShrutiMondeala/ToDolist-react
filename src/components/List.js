import { Component } from "react";


class List extends Component{
    constructor(props) {
        super(props);
        
    }
    render(){
        return( <div>
                <ul> 

                    {this.props.items.map(item => (<li>{item}</li>))}
                </ul>
            </div>
        )
    }
}
export default List;