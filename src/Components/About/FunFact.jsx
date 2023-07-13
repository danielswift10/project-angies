import { collaborateLg, collaborateMb, earth } from "../../Assets";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const FunFact = () => {
  return (
    <div className="bg-purple py-14">
      <div
        className={`${styles.boxWidth} ${styles.flexCenter} ss:px-0 ss:w-[600px] lg:w-[1120px] xlg:w-[1200px] xl:w-[1280px] lg:px-0  md:w-[920px] md:px-0 ${styles.padding} gap-10 ${layout.section1}`}
      >
        <div className="content text-center ">
          <h4 className={`${styles.heading4} mb-2 text-yellow`}>
            Our Mission
          </h4>
          <h2
            className={`${styles.heading2} text-[44px] xs:w-[] ss:w-[] md:w-[] lg:w-[]  ss:text-[48px] mb-7 text-white leading-[46px] ss:leading-[56px]  tracking-[-1.32px] `}
          >
            Fun Facts
          </h2>
          <div className="number flex flex-wrap gap-20 w-[80%] mx-auto justify-center items-center">
            <div>
                <h2 className={`font-changa text-bold text-[72px] text-pink `}>12</h2>
                <p className={`font-pt font-bold text-[16px] text-yellow `}> <span className="block">Skilled </span> <span>Instructors</span> </p>
            </div>
            <div>
                <h2 className={`font-changa text-bold text-[72px] text-pink `}>12</h2>
                <p className={`font-pt font-bold text-[16px] text-yellow `}> <span className="block">Skilled </span> <span>Instructors</span> </p>
            </div>
            <div>
                <h2 className={`font-changa text-bold text-[72px] text-pink `}>12</h2>
                <p className={`font-pt font-bold text-[16px] text-yellow `}> <span className="block">Skilled </span> <span>Instructors</span> </p>
            </div>
            <div>
                <h2 className={`font-changa text-bold text-[72px] text-pink `}>12</h2>
                <p className={`font-pt font-bold text-[16px] text-yellow `}> <span className="block">Skilled </span> <span>Instructors</span> </p>
            </div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default FunFact;
