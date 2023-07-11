import { collaborateLg, collaborateMb, earth } from "../../Assets";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const Chats = () => {
  return (
    <div className="bg-purple py-14">
      <div
        className={`${styles.boxWidth} ${styles.flexBetween} ss:px-0 ss:w-[600px] lg:w-[1120px] xlg:w-[1200px] xl:w-[1280px] lg:px-0  md:w-[920px] md:px-0 ${styles.padding} gap-10 ${layout.section1}`}
      >
        <div className="image flex  justify-center flex-col items-center relative">
          <img src={collaborateMb} alt="" className="mx-auto ss:w-[500px] xs:w-[440px] md:hidden " />
          <img src={collaborateLg} alt="" className="hidden md:flex w-[628px] " />
          <div className="global absolute bottom-[-70px] right-0 xlg:right-[-60px] lg:right-0 shadow-card hidden md:flex text-center w-[200px] lg:w-[243px] rounded-[24px] bg-white pb-[16px] pt-[20px] lg:pt-[40px] px-[23px] lg:px-[20px] mt-10 mb-4">
            <div className={`${styles.flexCenter} flex-col relative w-fit  gap-[14px]`}>
              <div className="icon">
                <div className="flex w-full left-0 items-center justify-center absolute">
                <img src={earth} alt="" className="w-[70px] lg:w-[81px] absolute top-[-60px] lg:top-[-80px] " />
                </div>
              </div>
              <div className="content ">
                <h2 className={`${styles.paragraph1} md:text-[18px] mb-1`}>Global Network</h2>
                <p
                  className={`${styles.paragraph2} md:text-[15px] text-veryDimBlue`}
                >
                  Study at their own pace and on their own schedule, which is
                  ideal
                </p>
              </div>
            </div>
          </div>
          <div className="global md:hidden shadow-card rounded-[24px] w-fit md:w-full  bg-white p-[16px] mt-10 mb-4">
            <div className={`${styles.flexCenter} w-fit  gap-[14px]`}>
              <div className="icon">
                <img src={earth} alt="" className="w-[65px] xs:w-[48px]" />
              </div>
              <div className="content ">
                <h2 className={`${styles.paragraph1}`}>Global Network</h2>
                <p
                  className={`${styles.paragraph3} w-[90%] xs:w-[270px] text-veryDimBlue`}
                >
                  Study at their own pace and on their own schedule, which is
                  ideal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content ">
          <h4 className={`${styles.heading4} mb-2 text-pink`}>
            Chats and Forums
          </h4>
          <h2
            className={`${styles.heading2} text-[44px] xs:w-[400px] ss:w-[500px] md:w-[420px] lg:w-[500px]  ss:text-[48px] mb-7 text-white leading-[46px] ss:leading-[56px]  tracking-[-1.32px] `}
          >
            Collaborate & learn with our platform{" "}
          </h2>
          <p
            className={`${styles.paragraph} text-[#ffffffb3] md:w-[400px]   xs:text-[18px] mb-6 xs:w-[460px] ss:w-[550px] lg:w-[450px] xl:w-[528px]`}
          >
            We offer a wide range of language courses taught by experienced and
            qualified instructors, who are passionate about teaching and
            dedicated to helping you achieve your language goals.{" "}
          </p>
          <Button
            type={"button"}
            title={"Join us"}
            classname={`${
              styles.image
            } ${"bg-yellow shadow-yellowBtn font-pt text-white cursor-pointer py-[12px] w-[159px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px] xs:text-[18px]  font-bold"} `}
          />
        </div>
      </div>
    </div>
  );
};

export default Chats;
