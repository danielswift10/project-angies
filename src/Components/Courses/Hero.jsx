import { books, instructor, introImage, reward } from "../../Assets";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const Hero = () => {
  return (
    <div className="bg-white">
      <div
        className={`${styles.boxWidth}  mt-[25px]  md:pb-2 md:gap-5 md:pt-[100px] pt-16 ss:pt-[70px] sm:pt-[50px] ${styles.padding}`}
      >
        <div
          className={`${layout.section} text-center xlg:w-[1150px] xl:w-full mx-auto gap-10 md:gap-0 flex flex-col justify-center items-center`}
        >
          <div className="hero-content mb-5 flex items-center justify-center flex-col">
            <h1
              className={`${styles.heading1} md:leading-[58px] md:w-[500px] text-center text-black xs:text-[50px] ss:text-[55px] mb-5 xs:leading-[54px] xs:w-[420px] xl:w-[628px]  ss:w-[500px]  lg:w-[628px] sm:w-[500px] md:mb-[20px] `}
            >
              We have a team of{" "}
              <span className="text-purple relative border-b border-b-pink border-b-4 ">
                skilled
              </span>{" "}
              <span>Language Instructors</span>
            </h1>
            <p
              className={`mb-6 ${styles.paragraph} text-[18px] md:w-[] text-center xs:w-[420px] ss:w-[500px] lg:w-[550px] xl:w-[628px] text-veryDimBlue`}
            >
              We are passionate about what we do, and we believe that our love
              for languages is contagious. Join us on this journey to discover
              the beauty and richness of language. Contact us today to learn
              more about our courses and how we can help you achieve your
              language learning goals.
            </p>

            <div
              className={`${styles.flexBetween} sm:justify-cneter mb-12 border w-full justify-center items-center sm:w-fit md:w-fit gap-[20px]`}
            >
              <Button
                type={"button"}
                title={"Join us"}
                classname={`${
                  styles.image
                } ${"bg-purple shadow-purpleBtn font-pt text-white cursor-pointer py-[12px]  w-full sm:w-[180px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
              />
              <Button
                type={"button"}
                title={"Our Courses"}
                classname={`${
                  styles.image
                } ${"bg-yellow shadow-yellowBtn font-pt text-white cursor-pointer py-[12px]  w-full sm:w-[180px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
              />
            </div>
            <div className={` ${styles.flexCenter} `}>
            <img src={books} alt=""  className="rounded-[24px] w-full ss:w-[85%] smd:w-[80%] "/>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
