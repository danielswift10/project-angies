import { paris } from "../../Assets";
import styles from "../../style";

const Blog1 = () => {
    return ( 
        <div className={`mt-32 ${styles.boxWidth} ${styles.padding}  flex flex-col items-center justify-center`}>
            <div className=" lg:w-[800px] flex flex-col items-center justify-center ">
            <div className="heading text-center mb-5 sm:mb-5 md:mb-10 ss:px-0 ss:w-[600px] lg:w-[800px]  xlg:w-[1200px] xl:w-[1280px] lg:px-0  md:w-[920px] md:px-0">
            <h4 className={`${styles.heading4} mb-0 text-pink`}>Blog</h4>
            <h1
              className={`${styles.heading1} md:leading-[58px] md:w-[600px]  mx-auto text-center text-black xs:text-[50px] ss:text-[55px] mb-5 xs:leading-[54px] xs:w-[445px] xl:w-[800px]  ss:w-[600px]  lg:w-[728px] sm:w-[] md:mb-[20px] `}
            >
              Learn to speak & write French like a Local in 3 Weeks
            </h1>         
          </div>
          <div className="image mb-7 sm:mb-10">
                <img src={paris} alt="" className="lg:w-[800px] xs:w-[90%] mx-auto" />
            </div>
            <div className="content">
                <p 
                className={`mb-6 ${styles.paragraph} text-[18px] text-justify xs:w-[420px] ss:w-[530px] sm:w-[650px] lg:w-[740px] xl:w-[800px] text-veryDimBlue`}>
                <span className="block mb-5">
                Finding a language exchange partner is a great way to improve your language skills and gain confidence in speaking with a native speaker. A language exchange partner is someone who speaks the language you are learning and wants to learn the language you speak. By practicing with a language exchange partner, you can improve your speaking skills and learn new vocabulary and expressions. 
                </span>
      <span className="block mb-5">
      There are several ways to find a language exchange partner. You can search for language exchange groups online or through social media platforms like Facebook or Instagram. Many language schools also offer language exchange programs where you can practice speaking with other students. <br />
      </span>
      When looking for a language exchange partner, it's important to find someone who is a good match for you. Look for someone who has similar language proficiency and interests. It's also a good idea to set clear goals and expectations for your language exchange sessions.
                </p>
            </div>
            </div>
        </div>
     );
}
 
export default Blog1;