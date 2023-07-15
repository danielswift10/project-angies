import { NavLink } from "react-router-dom";
import { Button } from "../../Utils";
import styles from "../../style";

const GetStarted = () => {
  return (
    <div className={`${styles.boxWidth}  my-10 lg:my-[150px] ss:px-6 ${styles.padding}`}>
      <div className={`h-[535px] sm:h-[550px]  ${styles.flexCenter} started bg-purple rounded-[34px] `}>
      <div className="text-center px-5">
        <h1 className={`${styles.heading1} sm:leading-[58px] mb-3 ss:mb-3 xs:w-[389px] sm:text-[60px] ss:text-[50px] text-white  mx-auto`}>Let’s get you started today</h1>
        <p className={`${styles.paragraph} text-[#ffffff99] sm:text-[18px] lg:text-[24px]  xl:text-[24px] smd:text-[22px]`}>on your Journey to speaking new languages </p>        
        <div
          className={`${styles.flexBetween} flex-col sm:flex-row w-[159px] mx-auto mt-8 sm:mt-12 sm:justify-start sm:w-fit gap-[20px]`}
        >
          <NavLink to={"/register"}>
          <Button
            type={"button"}
            title={"Register Now"}
            classname={`${
              styles.image
            } ${"bg-pink shadow-yellowBtn font-pt text-white cursor-pointer py-[12px] w-full px-[33px] sm:px-0 sm:w-[180px] md:w-[193px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
          />
          </NavLink>
          <NavLink to={"/courses"}>
          <Button
            type={"button"}
            title={"View Courses"}
            classname={`${
              styles.image
            } ${"bg-yellow shadow-yellowBtn font-pt text-white cursor-pointer py-[12px] px-[33px] sm:px-0 w-full md:w-[193px] sm:w-[180px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
          /> 
          </NavLink>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default GetStarted;
