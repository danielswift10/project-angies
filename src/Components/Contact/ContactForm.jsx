import { instructor, introImage, reward } from "../../Assets";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const ContactForm = () => {
  return (
    <div className="bg-purple">
      <div
        className={`${styles.boxWidth} md:gap-5 md:py-[100px] py-16 ss:py-[70px] sm:py-[50px] ${styles.padding}`}
      >
        <div
          className={`{ text-center xlg:w-[1150px]  xl:w-full mx-auto gap-10 md:gap-0 flex flex-col justify-center items-center`}
        >
          <div className=" md:mb-10">
          <h4 className={`${styles.heading4} mb-2 text-yellow `}>
            Contact Form
          </h4>
          <h2
            className={`${styles.heading2} text-[44px]  xl:text-[79px] ss:text-[48px] text-white leading-[46px] ss:leading-[56px] tracking-[-1.32px] `}
          >
            Send us a message
          </h2>
          </div>

          <div className={` lg:w-[600px] mx-auto xlg:w-[650px]`}>
            <form className="flex flex-col gap-4 items-start ">
                <div className="name-email flex flex-row gap-3 w-full">
                    <input type="text" required className="p-[20px] outline-none rounded-[8px] w-full leading-[1.4em] font-pt font-normal text-[16px] md:text-[18px] lg:text-[20px] " placeholder="Name" />
                    <input type="email" required className="p-[20px] outline-none rounded-[8px] w-full leading-[1.4em] font-pt font-normal text-[16px] md:text-[18px] lg:text-[20px] " placeholder="Email" />
                </div>
                <div className="message w-full">
                    <textarea placeholder="Message"  required className="p-[20px] outline-none w-full rounded-[8px] leading-[1.4em] font-pt font-normal text-[16px] md:text-[18px] lg:text-[20px] " name="" id="" cols="30" rows="4">

                    </textarea>
                </div>
                <Button
                type={"submit"}
                title={"Sign Up"}
                classname={`${
                  styles.image
                } ${"bg-pink  shadow-purpleBtn font-pt text-white cursor-pointer py-[12px] w-full rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
