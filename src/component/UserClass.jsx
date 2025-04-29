import React from "react";

class UserClass extends React.Component {

  constructor(props){
    super(props);
    console.log(this.props.name + "Constructor")
    this.state ={
        count : 0,
    }

  }

  componentDidMount(){
    console.log(this.props.name + "ComponentDidMount")
  }

  render() {
    const {count} = this.state;
    console.log(this.props.name + "Render")
    return (
      <div className="user-card">
        <h2>{count}</h2>
        <button onClick={() => {
            this.setState({
                count : this.state.count + 1,
            })
        }}>Increase +</button>
        <h2 style={{ margin: "1vh 0" }}>Name: {this.props.name}</h2>
        <h3 style={{ margin: "1vh 0" }}>Contact: thatkunaal@gmail.com</h3>
        <h3 style={{ margin: "1vh 0" }}>Link: github.com</h3>
      </div>
    );
  }
}

export default UserClass;
