import { instructor, introImage, reward } from "../../Assets";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const Hero = () => {
  return (
    <div className="bg-white">
      <div
        className={`${styles.boxWidth}  mt-[35px]  md:pb-2 md:gap-5 md:pt-[100px] pt-16 ss:pt-[70px] sm:pt-[50px] ${styles.padding}`}
      >
        <div
          className={`${layout.section} text-center xlg:w-[1150px] xl:w-full mx-auto gap-10 md:gap-0 flex justify-center items-center`}
        >
          <div className="hero-content flex items-center justify-center flex-col">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
