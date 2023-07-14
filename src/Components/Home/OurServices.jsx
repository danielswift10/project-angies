import { Features } from "../../Constants";
import styles from "../../style";

const OurServices = () => {
    return ( 
        <div className="bg-white py-[100px]">
            <div className={`${styles.boxWidth} ${styles.padding}`}>
            <div className="heading text-center mb-12 sm:mb-20">
                <h4 className={`${styles.heading4} mb-5 text-pink`}>Our Services</h4>
                <h2 className={`${styles.heading2} text-[36px] leading-[36px] tracking-[-0.96px]  `}>Features & Benefits</h2>
            </div>
            <div className="cards flex flex-wrap items-center  gap-[20px]   lg:gap-[24px]">
                {
                    Features.map((feature, index)=>(
                        <div className={`rounded-[24px] bg-white shadow-card   w-[288px] xs:w-[320px] ss:w-[] sm:w-[224px]  md:w-[250px] lg:w-[250px] xlg:w-[270px] xl:w-[302px] mx-auto text-center bg-white  py-[37px] px-6 lg:px-8 md:py-[48px]`}>
                            <div className="flex items-center flex-col">
                                <img src={feature.image} alt="" className="w-[48px] xl:w-[81px] md:w-[60px] mb-[20px]" />
                                <div className="">
                                    <p>
                                        <span className={`block font-pt mb-1 font-bold text-[20px] text-black xl:text-[28px] sm:text-[22px] md:text-[24px] `}>{feature.title}</span>
                                        <span className={`${styles.sub} text-[16px]`}> {feature.content}</span>
                                    </p>
                                
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



            
        </div>
        </div>
     );
}
 
export default OurServices;