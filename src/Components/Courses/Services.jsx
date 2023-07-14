import { instructor, introImage, reward } from "../../Assets";
import { Countries } from "../../Constants";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const Hero = () => {
  return (
    <div className="bg-white">
      <div
        className={`${styles.boxWidth}  mt-[25px]  mb-[60px] lg:mb-[120px] md:pb-2 md:gap-5 ${styles.padding}`}
      >
        <div
          className={` flex-col text-center xlg:w-[1150px] xl:w-full mx-auto gap-10 md:gap-0 flex justify-center items-center`}
        >
          <div className="hero-content flex items-center justify-center flex-col">
          <div className="heading text-center mb-7 sm:mb-10">
                <h4 className={`${styles.heading4} mb-5 text-pink`}>Our Services</h4>
                <h2 className={`${styles.heading2} text-[36px] leading-[36px] tracking-[-0.96px]  `}>Our popular courses</h2>
            </div>
            <p
              className={`mb-2 sm:mb-7 ${styles.paragraph} text-[18px] text-center xs:w-[420px] ss:w-[500px] lg:w-[550px] xl:w-[628px] text-veryDimBlue`}
            >
              We are passionate about what we do, and we believe that our love
              for languages is contagious. Join us on this journey to discover
              the beauty and richness of language. Contact us today to learn
              more about our courses and how we can help you achieve your
              language learning goals.
            </p>
          </div>
          <div className="flex flex-wrap gap-y-[60px] my-0 md:my-10 items-center justify-between smd:w-[780px] mx-auto lg:w-[1000px] lg:gap-x-[120px] ">
            {
                Countries.map((country, index) => (
                    <div className={`flex flex-row items-center justify-center w-[157px] gap-4`} key={country.id}>
                        <img src={country.image} alt="" className="w-[24px] rounded-full lg:w-[40px] "/>
                    <h2 className="font-pt font-bold text-[18px] lg:text-[24px]  ">{country.name}</h2>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
