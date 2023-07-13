import { useEffect } from "react";
import styles from "../../style";
import { Hero, Mission1 } from "../../Components/About";

const About = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div>
      <Hero/>
      <Mission1/>
    </div>
  );
};

export default About;
