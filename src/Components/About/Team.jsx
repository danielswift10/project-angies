import styles, { layout } from "../../style";

const Team = () => {
    return ( 
        <div>
            <div className={`${styles.boxWidth} ${styles.flexBetween}  ss:px-0 ss:w-[600px] lg:w-[1070px] xlg:w-[1150px] xl:w-[1280px] lg:px-0  md:w-[970px] md:px-0 ${styles.padding} gap-10 ${layout.section1}`}>
                <div className="header">
                <h4 className={`${styles.heading4} mb-2 text-yellow `}>
            Our People
          </h4>
          <h2
            className={`${styles.heading2} text-[44px]  xl:text-[79px] ss:text-[48px] mb-12 sm:m text-black leading-[46px] ss:leading-[56px]  tracking-[-1.32px] `}
          >
            Meet the team
          </h2>
                </div>
            </div>
        </div>
     );
}
 
export default Team;