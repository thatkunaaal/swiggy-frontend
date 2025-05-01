import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{

    constructor(){
        super();
        console.log("Parent Constructor")

        this.state = {
            count : 0,
        }
    }

    componentDidMount(){
    
        console.log("Parent ComponentDidMount")
      }

    render(){
        console.log("Parent Render")
        return(
            <div className=" flex-column-center" style={{margin: "10vh"}}>
           <div style={{marginBottom: "5vh"}}>
            <h1>Created by~</h1>
           </div>
            <UserClass name={"First child "} />
            {/* <UserClass name={"Second child "} count={this.state.count}/>
            <UserClass name={"Third child "} count={this.state.count} /> */}
          </div>
        )
    }
}

export default About;
