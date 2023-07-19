import { team1, team2, team3, team4 } from "../../Assets";
import styles, { layout } from "../../style";

const Team = () => {
  return (
    <div>
      <div
        className={`${styles.boxWidth} ${styles.flexBetween}  lg:w-[1070px] ss:w-full xlg:w-[1150px] xl:w-[1280px] lg:px-0  md:px-0 ${styles.padding} gap-10 ${layout.section1}`}
      >
        <div className="header mx-auto text-center w-full ">
          <h4 className={`${styles.heading4} mb-2 text-pink `}>Our People</h4>
          <h2
            className={`${styles.heading2} text-[44px]  xl:text-[79px] ss:text-[48px] mb-12 sm:m text-black leading-[46px] ss:leading-[56px]  tracking-[-1.32px] `}
          >
            Meet the team
          </h2>
          <div className="flex flex-col  w-[100%] items-center justify-center] ">
            <div className="flex flex-col ss:flex-row w-full">
              <div className="team1 w-full lg:h-[530px] h-[320px]"></div>
              <div className="team2 w-full lg:h-[530px] h-[320px]"></div>
            </div>
            <div className="flex flex-col ss:flex-row w-full">
              <div className="team3 w-full lg:h-[530px] h-[320px]"></div>
              <div className="team4 w-full lg:h-[530px] h-[320px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
