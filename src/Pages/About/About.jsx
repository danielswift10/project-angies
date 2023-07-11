import { useEffect } from "react";

const About = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

    return (
        <div></div>
      );
}
 
export default About;