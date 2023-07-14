import { listening } from "../../Assets";
import { InsightContent } from "../../Constants";
import styles, { layout } from "../../style";

const Insight = () => {
  return (
    <div className=" py-14 bg-secondary">
      {
        InsightContent.map((insight, index) => (
            <div
            key={insight.id}
        className={`${styles.boxWidth} ${styles.flexBetween} mb-10 sm:mb-0
        ${
            index % 2 === 1 ? ' md:flex-row' : 'md:flex-row-reverse'
          }
          ${
            index % 2 === 1  ? "flex-col-reverse" : "flex-col-reverse"
          }
        ss:px-0 ss:w-[600px] lg:w-[1070px] xlg:w-[1150px] xl:w-[1280px] lg:px-0  md:w-[970px] md:px-0 ${styles.padding} gap-10 md:gap-10 lg:gap-14 ${layout.section1}`}
      >
        <div
          className={`content ${styles.flexCenter} flex-col md:items-start text-center  md:text-left`}
        >
          <h4 className={`${styles.heading4} mb-2  text-pink`}>{insight.title}</h4>
          <h2
            className={`${styles.heading2} text-[44px] xs:w-[]  ss:w-[550px] md:w-[420px] md:text-[53px] mb-3 md:mb-5 lg:text-[65px] xl:text-[78px] xl:w-[640px] lg:w-[550px] lg:leading-[64px]  xl:leading-[70px]  ss:text-[48px] text-black leading-[46px] ss:leading-[56px]  tracking-[-1.32px] `}
          >
            {insight.heading1} <span className="text-purple ">{insight.heading2} </span> 
            {insight.heading3}
          </h2>
          <p
            className={`${styles.paragraph}  text-veryDimBlue md:w-[420px] text-[18px] xs:text-[18px] mb-6 xs:w-[460px] ss:w-[550px] lg:w-[550px] xl:w-[588px]`}
          >
          {insight.content}
          </p>
        </div>
        <div className="image flex  justify-center flex-col items-center relative">
          <img
            src={insight.image}
            alt=""
            className="mx-auto ss:w-[500px] xs:w-[440px] lg:w-[590px] "
          />
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default Insight;
