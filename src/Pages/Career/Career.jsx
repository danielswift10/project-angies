import { useEffect } from "react";
import styles from "../../style";

const Career = (props) => {
    useEffect(() => {
        document.title = props.title || "";
      }, [props.title]);
    
  return (
    <div className="my-[200px] flex-col flex items-center text-center  jusify-center w-fit mx-auto">
      <h1 className={`${styles.heading1} lg:w-full xlg:w-full xl:w-full`}>
        Coming Soon!
      </h1>
      <p className={`${styles.paragraph} text-[22px] mt-4`}>
        Please check back...
      </p>
    </div>
  );
};

export default Career;
