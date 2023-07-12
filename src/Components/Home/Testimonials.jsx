import { Feedback } from "../../Constants";
import styles, { layout } from "../../style";

const Testimonials = () => {
    return ( 
        <div className="py-[70px] ">
            <div className={`${styles.boxWidth} border  ${styles.flexCenter} ss:px-0 ss:w-[600px] lg:w-[1120px] xlg:w-[1200px] xl:w-[1280px] lg:px-0  md:w-[920px] md:px-0 ${styles.padding} gap-10 ${layout.section1}`}> 
            <div className="heading text-center border mb-12 sm:mb-20">
                <h4 className={`${styles.heading4} mb-1 text-pink`}>Testimonials</h4>
                <h2 className={`${styles.heading2} text-[36px] leading-[36px] tracking-[-0.96px]`}>What  People  thinks about us</h2>
            </div>

            <div className="feedback flex flex-wrap ">
                {
                    Feedback.map((testimonial, index) => (
                        <div className="flex flex-col gap-10">
                            <div className={`${styles.flexCenter}`}>
                                <div className="avatar">
                                    <img src={testimonial.avatar} alt="" />
                                </div>
                                <div className="title">
                                    <p>
                                        <span>{testimonial.name}</span>
                                        <span>{testimonial.country}</span>
                                    </p>
                                </div>
                                <div className="quote">
                                    <img src={testimonial.quote} alt="" />
                                </div>
                            </div>
                            <div className="content">
                                {testimonial.content}
                            </div>
                            </div>
                    ))
                }
            </div>
            </div>
            
        </div>
     );
}
 
export default Testimonials;