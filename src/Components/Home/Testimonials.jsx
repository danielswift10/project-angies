import { Feedback } from "../../Constants";
import styles, {  } from "../../style";

const Testimonials = () => {
  return (
    <div className="py-[70px] my-10 bg-white">
      <div
        className={`${styles.boxWidth} flex-col   ${styles.flexCenter} ss:px-6 ${styles.padding} gap-10`}
      >
        <div className="heading text-center mb-5  sm:mb-5 ss:px-0 ss:w-[600px] lg:w-[1120px] xlg:w-[1200px] xl:w-[1280px] lg:px-0  md:w-[920px] md:px-0">
          <h4 className={`${styles.heading4} mb-1 text-pink`}>Testimonials</h4>
          <h2
            className={`${styles.heading2} text-[36px] leading-[56px]  tracking-[-0.96px]`}
          >
            What People think about us
          </h2>
        </div>

        <div className="feedback relative  w-full ">
          <div className="overflow-x-scroll lg:overflow-hidden pl-2 flex flex-row gap-5 pb-10">
            {Feedback.map((testimonial, index) => (
              <div className={`flex flex-col gap-4  bg-white  shadow relative rounded-[24px]  py-[32px] lg:px-[40px] px-[24px]`}>
                <div
                  className={`${styles.flexBetween}   w-[280px] lg:w-[266px] xlg:w-[248px]`}
                >
                  <div className={`${styles.flexCenter} gap-4`}>
                    <div>
                      <img
                        src={testimonial.avatar}
                        className="w-[48px] md:w-[64px]"
                        alt="avatar"
                      />
                    </div>
                    <div className="">
                      <div className="title">
                        <p>
                          <span
                            className={`${styles.heading4} lg:text-[22px] text-[18px] block`}
                          >
                            {testimonial.name}
                          </span>
                          <span className={`${styles.sub} text-[15px]`}>
                            {testimonial.country}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="quote absolute top-8 right-5">
                    <img src={testimonial.quote} alt="" className="w-[55px]" />
                  </div>
                </div>
                <div
                  className={`${styles.paragraph} md:w-[]  xs:text-[] xs:w-[] ss:w-[] lg:w-[] xl:w-[] text-veryDimBlue`}
                >
                  {testimonial.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
