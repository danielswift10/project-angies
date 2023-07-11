import { instructor, introImage, reward } from "../../Assets";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const Hero = () => {
  return (
    <div>
      <div
        className={`${styles.boxWidth}  mt-[20px] mb-28 md:mb-2 md:gap-5 md:pt-[60px] pt-16 ss:pt-[70px] sm:pt-[50px] ${styles.padding}`}
      >
        <div
          className={`${layout.section} gap-10 flex justify-center items-center md:justify-center xl:justify-between`}
        >
          <div className="hero-content ">
            <h1
              className={`${styles.heading1} text-black xs:text-[50px] ss:text-[55px] mb-3 xs:leading-[54px] xs:w-[450px] ss:w-[600px]   md:text-[] lg:text-[] lg:w-[5S0px] sm:w-[500px] md:mb-[10px] `}
            >
              Speak & write <span className="text-purple">French</span> with our
              online tutors
            </h1>
            <p
              className={`mb-6 ${styles.paragraph}   md:w-[420px]  xs:text-[] xs:w-[460px] ss:w-[550px] lg:w-[450px] xl:w-[528px] text-veryDimBlue`}
            >
              We offer a wide range of language courses taught by experienced
              and qualified instructors, who are passionate about teaching and
              dedicated to helping you achieve your language goals.
            </p>
            <div
              className={`${styles.flexBetween}  sm:justify-start sm:w-[690px] md:w-fit gap-[20px]`}
            >
              <Button
                type={"button"}
                title={"Join us"}
                classname={`${
                  styles.image
                } ${"bg-purple shadow-purpleBtn font-pt text-white cursor-pointer py-[12px]  px-[] w-full sm:w-[150px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
              />
              <Button
                type={"button"}
                title={"Our Courses"}
                classname={`${
                  styles.image
                } ${"bg-yellow shadow-yellowBtn font-pt text-white cursor-pointer py-[12px]  px-[] w-full sm:w-[180px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
              />
            </div>
          </div>
          <div className={`hero-image relative z-10 `}>
            <div className="relative overflow-hidden px-6 relative z-10">
              <img
                src={introImage}
                alt=""
                className={`w-[408.409px]  ss:w-[500px] lg:w-[560px] md:w-[428.409px] xl:w-[681px]`}
              />
              <div className="earn hidden lg:flex absolute top-[320px] xl:top-[380px]  right-[-11px] shadow-card rounded-[24px] md:w-full lg:w-fit  bg-white p-[16px] mb-4">
                <div className={`${styles.flexStart} w-fit  gap-[18px]`}>
                  <div className="icon">
                    <img src={reward} alt="" />
                  </div>
                  <div className="content">
                    <h2 className={`${styles.paragraph1}`}>Earn rewards</h2>
                    <p className={`${styles.paragraph2} text-veryDimBlue`}>
                      Entertaining point system
                    </p>
                  </div>
                </div>
              </div>
              <div className=" instructor hidden absolute bottom-[70px]  lg:flex lg:w-fit left-[5px] z-20 shadow-card rounded-[24px] md:w-full bg-white p-[16px]">
                <div className={`${styles.flexStart} w-fit  gap-[18px]`}>
                  <div className="icon">
                    <img src={instructor} alt="" />
                  </div>
                  <div className="content">
                    <h2 className={`${styles.paragraph1}`}>
                      Skilled Instructors
                    </h2>
                    <p className={`${styles.paragraph2} text-veryDimBlue`}>
                      Native Speakers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles.flexCenter} md:w-[900px] flex-col sm:flex-row lg:hidden lg:w-[1100px] mx-auto gap-5`}
        >
          <div className="earn shadow-card rounded-[24px] w-full md:w-full  bg-white p-[16px] mb-4">
            <div className={`${styles.flexStart} w-fit  gap-[18px]`}>
              <div className="icon">
                <img src={reward} alt="" />
              </div>
              <div className="content">
                <h2 className={`${styles.paragraph1}`}>Earn rewards</h2>
                <p className={`${styles.paragraph2} text-veryDimBlue`}>
                  Entertaining point system
                </p>
              </div>
            </div>
          </div>
          <div className=" instructor shadow-card rounded-[24px] w-full bg-white p-[16px]">
            <div className={`${styles.flexStart} w-fit gap-[18px]`}>
              <div className="icon">
                <img src={instructor} alt="" />
              </div>
              <div className="content">
                <h2 className={`${styles.paragraph1}`}>Skilled Instructors</h2>
                <p className={`${styles.paragraph2} text-veryDimBlue`}>
                  Native Speakers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
