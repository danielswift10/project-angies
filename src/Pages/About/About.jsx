import { useEffect } from "react";
import { FunFact, Hero, Passion, Skilled } from "../../Components/About";

const About = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div>
      <Hero/>
      <Passion/>
      <FunFact/>
      <Skilled/>
      
    </div>
  );
};

export default About;
