import { NavLink } from "react-router-dom";
import { paris } from "../../Assets";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const BlogPost = () => {
  return (
    <div className="my-22">
      <div
        className={`${styles.boxWidth}   flex-col   ${styles.flexCenter} ss:px-6 ${styles.padding} gap-10`}
      >
        <div className="heading text-center mb-0 sm:mb-5 ss:px-0 ss:w-[600px] lg:w-[1120px]  xlg:w-[1200px] xl:w-[1280px] lg:px-0  md:w-[920px] md:px-0">
          <h4 className={`${styles.heading4} mb-0 text-pink`}>Blog</h4>
          <h2
            className={`${styles.heading2} text-[36px] leading-[56px]  tracking-[-0.96px]`}
          >
            Latest post
          </h2>
        </div>

        <div
          className={`${styles.flexBetween}   flex-col gap-[48px] md:gap-[30px] lg:gap-[48px]  ${layout.section1} xlg:w-[1200px] xl:w-[1280px]`}
        >
          <div className="image  ">
            <div className="relative rounded-[34px] overflow-hidden">
            <img src={paris} alt="" className={` ss:w-[590px]  lg:w-full`} />
            </div>
          </div>
          <div className="content ">
            <h2 className="mb-4">
              <span
                className={`${styles.paragraph2} text-purple ss:text-[20px] block mb-2 font-bold`}
              >
                23 Febuary 2022
              </span>
              <span
                className={`${styles.heading2} lg:leading-[47px] sm:text-[48px] md:text-[47px]  text-black lg:text-[47px] xlg:text-[55px] xlg:leading-[54px] block text-[32px] ss:w-[600px]  md:w-[420px] lg:w-[480px]  ss:text-[48px] mb-4 text-black leading-[36px] ss:leading-[48px] tracking-[-1.32px] `}
              >
                Learn to speak & write French like a Local in 3 Weeks
              </span>
            </h2>
            <p
              className={`${styles.paragraph2} mb-8 font-normal  text-veryDimBlue md:w-[400px] md:text-[16px]   xs:text-[18px] mb-6 xs:w-[460px] ss:w-[550px] lg:w-[450px] xl:w-[468px]`}
            >
              Start by setting realistic and achievable goals for your language
              learning journey. Decide why you want to learn the language and
              what level of proficiency you want to achieve.
            </p>

            <div
              className={` flex flex-row items-center justify-start w-full sm:w-[690px]  md:w-fit gap-[20px]`}
            >
              <NavLink to={"/blog/learn-to-speak-write-french-like-a-local-in-3-weeks"}>
              <Button
                type={"button"}
                title={"Read More"}
                classname={`${
                  styles.image
                } ${"bg-yellow shadow-yellowBtn font-pt text-white cursor-pointer py-[12px]  px-[36px] sm:px-0 sm:w-[180px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
              />
              </NavLink>
              <NavLink to={"/blog"}>
              <Button
                type={"button"}
                title={"All Posts"}
                classname={`${
                  styles.image
                } ${"bg-purple shadow-purpleBtn font-pt text-white cursor-pointer py-[12px]  px-[40px] sm:px-0 sm:w-[180px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
              />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
