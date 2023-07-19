import { team1, team2, team3, team4 } from "../../Assets";
import styles, { layout } from "../../style";

const Team = () => {
  return (
    <div>
      <div
        className={`${styles.boxWidth} ${styles.flexBetween}  ss:px-0 ss:w-[600px] lg:w-[1070px] xlg:w-[1150px] xl:w-[1280px] lg:px-0  md:w-[970px] md:px-0 ${styles.padding} gap-10 ${layout.section1}`}
      >
        <div className="header mx-auto text-center">
          <h4 className={`${styles.heading4} mb-2 text-pink `}>Our People</h4>
          <h2
            className={`${styles.heading2} text-[44px]  xl:text-[79px] ss:text-[48px] mb-12 sm:m text-black leading-[46px] ss:leading-[56px]  tracking-[-1.32px] `}
          >
            Meet the team
          </h2>
          <div className="flex flex-col  items-center justify-center border w-[340px] ">
            <div className="flex flex-col md:flex-row w-full ">
                <div className=" team1 h-[425px] w-full` ">
                {/* <img src={team1} alt=""  className={` ${styles.image} pic w-[100%] `}/> */}
                </div>
                <div className=" team2 h-[425px] w-full">
                {/* <img src={team2} alt="" className={`${styles.image} w-[100%]`} /> */}
                </div>
            </div>
            <div className="flex flex-col md:flex-row team4">
                <div className={`team3 h-[425px] w-full`}>
                {/* <img src={team3} alt="" className={`${styles.image} w-[100%]`} /> */}
                </div>
                <div className="  team4 h-[425px] w-full ">
                {/* <img src={team4} alt="" className="w-[100%]"/> */}
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
