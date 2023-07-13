import { useEffect } from "react";
import styles from "../../style";
import { Hero, Passion } from "../../Components/About";

const About = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div>
      <Hero/>
      <Passion/>
    </div>
  );
};

export default About;
