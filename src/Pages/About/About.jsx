import { useEffect } from "react";
import styles from "../../style";
import { Hero, Passion, Skilled } from "../../Components/About";

const About = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div>
      <Hero/>
      <Passion/>
      <Skilled/>
    </div>
  );
};

export default About;
