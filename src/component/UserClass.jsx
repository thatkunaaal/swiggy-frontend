import React from "react";

class UserClass extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <div className="user-card">
        <h2 style={{ margin: "1vh 0" }}>Name: {this.props.name}</h2>
        <h3 style={{ margin: "1vh 0" }}>Contact: thatkunaal@gmail.com</h3>
        <h3 style={{ margin: "1vh 0" }}>Link: github.com</h3>
      </div>
    );
  }
}

export default UserClass;
