import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{

    constructor(){
        super();
        console.log("Parent Constructor")
    }

    componentDidMount(){
    
        console.log("Parent ComponentDidMount")
      }

    render(){
        console.log("Parent Render")
        return(
            <div className=" flex-column-center">
            <div>
              <h1>About section</h1>
            </div>
      
            <UserClass name={"First child "} />
            <UserClass name={"Second child "} />
            <UserClass name={"Third child "} />
          </div>
        )
    }
}

export default About;
