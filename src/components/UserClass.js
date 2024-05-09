import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name:"Dummy",
        // email:"Default"
        
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/surbhi6061");
    const json = await data.json();
    this.setState({
      userInfo:json,
    });
    console.log(json);
  }

  render() {
    const { name,avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Contact:surbhi@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
