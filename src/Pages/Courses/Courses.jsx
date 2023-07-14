import { useEffect } from "react";
import styles from "../../style";
import { FunFact, Hero, Insight, Services } from "../../Components/Courses";

const Courses = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div>
     <Hero/>
     <Services/>
     <FunFact/>
     <Insight/>
    </div>
  );
};

export default Courses;
