import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Constructor");
    // console.log(this.props);
    this.state = {
      userInfo: {
        name: "Kishan Singh",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "ComponentDidMount");
    const data = await fetch("https://api.github.com/users/thatkunaaal");
    const jsonData = await data.json();
    this.setState({ userInfo: jsonData });
     this.timer = setInterval(()=>console.log("React JS OP"),1000);
  }

  componentDidUpdate() {
    console.log(this.props.name + "ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + "ComponentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    const { name, avatar_url, html_url, location, bio } = this.state.userInfo;
    console.log(this.props.name + "Render");
    return (
      <div className="card">
        <div style={{display: "flex" , justifyContent : "center"}}>
        <img style={{height: "220px" ,width : "220px"}}  src={avatar_url} />
        </div>
        <p className="heading">Name: {name}</p>
        <p>Contact: thatkunaal@gmail.com</p>
        <p>Location : {location}</p>
        <p>{bio}</p>
      </div>
    );
  }
}

export default UserClass;
