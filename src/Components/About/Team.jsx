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
          <div className="flex flex-col  w-[] ">
            <div className="flex flex-col rounded-t-lg md:flex-row w-full ">
              <div className={` xs:h-[320px]  w-full`}>
                <img
                  src={team1}
                  alt=""
                  className={` w-[100%]`}
                />
              </div>
              <div className="  w-full h-[353.05px] team2  ">
                {/* <img src={team2} alt="" className="w-[100%] " /> */}
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full ">
              <div className={` xs:h-[320px]  w-full`}>
                <img
                  src={team3}
                  alt=""
                  className={` w-[100%]`}
                />
              </div>
              <div className="  h-full w-full ">
                <img src={team4} alt="" className="w-[100%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
