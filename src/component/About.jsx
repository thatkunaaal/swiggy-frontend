import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className=" flex-column-center">
      <div>
        <h1>About section</h1>
      </div>

      <User />
      <UserClass />
    </div>
  );
};

export default About;
