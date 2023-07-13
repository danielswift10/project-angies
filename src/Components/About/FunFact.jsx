import { collaborateLg, collaborateMb, earth } from "../../Assets";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const FunFact = () => {
  return (
    <div className="bg-purple py-14">
      <div
        className={`${styles.boxWidth} ${styles.flexCenter} ss:px-0 ss:w-[600px] lg:w-[1120px] xlg:w-[1200px] xl:w-[1280px] lg:px-0  md:w-[920px] md:px-0 ${styles.padding} gap-10 ${layout.section1}`}
      >
        <div className="content text-center  w-[85%] ">
          <h4 className={`${styles.heading4} mb-2 text-yellow `}>
            Our Mission
          </h4>
          <h2
            className={`${styles.heading2} text-[44px]  xl:text-[79px] ss:text-[48px] mb-12 sm:m text-white leading-[46px] ss:leading-[56px]  tracking-[-1.32px] `}
          >
            Fun Facts
          </h2>
          <div className="w-full  flex flex-col relative  gap-3 md:flex-row md:gap-0 md:justify-between   ">
            <div className="flex flex-row  relative justify-between   lg:gap-[145px] xlg:gap-[170px] xl:gap-[125px]  md:gap-[90px]">
            <div className=" ">
                <h2 className={`font-changa text-bold text-[72px] lg:text-[90px] mb-[-15px]  xl:text-[128px] text-pink `}>12</h2>
                <p className={`font-pt font-bold text-[16px] text-yellow xl:text-[32px] lg:text-[23px] `}> <span className="block mb-[-5px] xl:mb-[-7px] ">Skilled </span> <span>Instructors</span> </p>
            </div>
            <div className=" relative md:hidden w-fit h-full flex items-start justify-center ">
            <div className=" h-[80px] w-[7px] top-[30px] line  rounded-[10px] bg-[#ffffff33] absolute" />
            </div>
            <div className="md:block hidden md:h-[163px] xl:h-[163px]  xlg:left-[190px] md:left-[130px] h-[80px] w-[7px] left-[135px] ss:left-[250px] top-[30px] md:top-[-10px] lg:top-5 lg:h-[183px] lg:left-[180px] line  xl:left-[210px] rounded-[10px] bg-[#ffffff33] lg:w-[8px] absolute xl:top-14 " />
            <div className="">
                <h2 className={`font-changa text-bold text-[72px] lg:text-[90px] mb-[-15px] xl:text-[128px] text-pink `}>14</h2>
                <p className={`font-pt font-bold  text-[16px] text-yellow xl:text-[32px] lg:text-[23px] `}> <span className="block mb-[-5px] xl:mb-[-7px]">We Teach </span> <span>Languages</span> </p>
            </div>
            </div>

            <div className="md:h-[163px] xl:h-[163px] xlg:left-[470px] md:left-[310px] h-[80px] w-[7px] left-[120px]  left-0 hidden md:block top-[30px] md:top-[-10px] lg:top-5  lg:h-[183px] lg:left-[440px] line xl:left-[500px] rounded-[10px] bg-[#ffffff33] lg:w-[8px] absolute xl:top-14 " />

            <div className="flex flex-row relative justify-between   lg:gap-[145px] xlg:gap-[170px] xl:gap-[125px] md:gap-[90px]">
            <div className="">
                <h2 className={`font-changa text-bold text-[72px] lg:text-[90px] mb-[-15px] xl:text-[128px] text-pink `}>63</h2>
                <p className={`font-pt font-bold text-[16px] text-yellow xl:text-[32px] lg:text-[23px] `}> <span className="block mb-[-5px] xl:mb-[-7px]">Current</span> <span>Students</span> </p>
            </div>
            <div className=" relative md:hidden w-fit h-full flex items-start justify-center ">
            <div className=" h-[80px] w-[7px] top-[30px] line  rounded-[10px] bg-[#ffffff33] absolute" />
            </div>
            <div className="md:block hidden md:h-[163px] xl:h-[163px] xlg:left-[190px] md:left-[130px] h-[80px] w-[7px] left-[115px] ss:left-[230px] top-[30px] md:top-[-10px] lg:top-5 lg:h-[183px] lg:left-[170px] line xl:left-[210px] rounded-[10px] bg-[#ffffff33] lg:w-[8px] absolute xl:top-14 " />
            <div className="">
                <h2 className={`font-changa text-bold text-[72px] lg:text-[90px] mb-[-15px] xl:text-[128px] text-pink  `}>213</h2>
                <p className={`font-pt font-bold text-[16px] text-yellow xl:text-[32px] lg:text-[23px] `}> <span className="block mb-[-5px] xl:mb-[-7px]">Happy</span> <span>Alumnus</span> </p>
            </div>
            </div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default FunFact;
