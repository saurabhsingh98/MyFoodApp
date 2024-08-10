import { Component } from "react";


class UserClass extends Component {

    constructor(props){
        super(props);
        console.log(this.props.name+"constructor loaded")
    }

    componentDidMount(){
        console.log(this.props.name+"componentDidMount loaded")
    }

    render(){

        console.log(this.props.name+"render loaded")

        const {name, location}= this.props;

        return(
            <div className="contact-person"> 
                <h1> {name} </h1>
                <h4>{location}</h4>
            </div>
        );
    }
}

export default UserClass;
