import { mission, mission2 } from "../../Assets";
import styles, { layout } from "../../style";

const Skilled = () => {
  return (
    <div className=" py-14">
      <div
        className={`${styles.boxWidth} ${styles.flexBetween}  ss:px-0 ss:w-[600px] lg:w-[1070px] xlg:w-[1150px] xl:w-[1280px] lg:px-0  md:w-[970px] md:px-0 ${styles.padding} gap-10 ${layout.section1}`}
      >
        <div className="image flex  justify-center flex-col items-center relative">
          <img
            src={mission2}
            alt=""
            className="mx-auto ss:w-[500px] xs:w-[440px] lg:w-[590px] "
          />
        </div>
        <div
          className={`content ${styles.flexCenter} flex-col md:items-start text-center  md:text-left`}
        >
          <h4 className={`${styles.heading4} mb-2  text-pink`}>Our Mission</h4>
          <h2
            className={`${styles.heading2} text-[44px] xs:w-[]  ss:w-[550px] md:w-[420px] md:text-[53px] md:mb-7 lg:text-[65px] xl:text-[72px] lg:w-[550px] lg:leading-[64px]  xl:leading-[70px]  ss:text-[48px] mb-3 text-black leading-[46px] ss:leading-[56px]  tracking-[-1.32px] `}
          >
            We have a team of <span className="text-purple "> skilled </span>
            Language Instructors
          </h2>
          <p
            className={`${styles.paragraph}  text-veryDimBlue md:w-[420px] text-[18px] xs:text-[18px] mb-6 xs:w-[460px] ss:w-[550px] lg:w-[550px] xl:w-[588px]`}
          >
            We are passionate about what we do, and we believe that our love for
            languages is contagious. Join us on this journey to discover the
            beauty and richness of language. Contact us today to learn more
            about our courses and how we can help you achieve your language
            learning goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skilled;
