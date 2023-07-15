import { NavLink } from "react-router-dom";
import { mission } from "../../Assets";
import styles, { layout } from "../../style";
import { Button } from "../../Utils";

const ErrorPage = () => {
  return (
    <div className=" my-[140px] ">
      <div
        className={`${styles.boxWidth} ${styles.flexBetween} flex-col-reverse ss:px-0 ss:w-[600px] lg:w-[1070px] xlg:w-[1150px] xl:w-[1280px] lg:px-0  md:w-[970px] md:px-0 ${styles.padding} gap-5 md:gap-10 ${layout.section1}`}
      >

        <div className={`content ${styles.flexCenter} flex-col md:items-start text-center  md:text-left`}>
          <h4 className={`${styles.heading4} mb-2  text-pink`}>404 Error</h4>
          <h2
            className={`${styles.heading2} text-[44px] xs:w-[]  ss:w-[550px] md:w-[420px] md:text-[53px] md:mb-7 lg:text-[65px] xl:text-[78px] xl:w-[640px] lg:w-[550px] lg:leading-[64px]  xl:leading-[70px]  ss:text-[48px] mb-3 text-black leading-[46px] ss:leading-[56px]  tracking-[-1.32px] `}
          >
          The Page you are looking for cannot be found
          </h2>
          <NavLink to={"/join-us"}>
              <Button
                type={"button"}
                title={"Join us"}
                classname={`${
                  styles.image
                } ${"bg-purple shadow-purpleBtn font-pt text-white cursor-pointer py-[12px]  px-[48px] sm:px-0 sm:w-[157px] w-[] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
              />
              </NavLink>
        </div>
        <div className="image flex  justify-center flex-col items-center relative">
          <img
            src={mission}
            alt=""
            className="mx-auto ss:w-[500px] xs:w-[440px] lg:w-[590px] "
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
