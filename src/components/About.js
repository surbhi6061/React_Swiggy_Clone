import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is about us.</h2>
      {/* <User name={"surbhi kumari(function)"} location={"chennai"} /> */}
      <UserClass name={"surbhi kumari(class)"} location={"chennai"} />
    </div>
  );
};
export default About;
