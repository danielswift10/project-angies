import { blog2, paris } from "../../Assets";
import styles from "../../style";

const Blog2 = () => {
    return ( 
        <div className={`mt-32 ${styles.boxWidth} ${styles.padding}  flex flex-col items-center justify-center`}>
            <div className=" lg:w-[800px] flex flex-col items-center justify-center ">
            <div className="heading text-center mb-5 sm:mb-5 md:mb-10 ss:px-0 ss:w-[600px] lg:w-[800px]  xlg:w-[1200px] xl:w-[1280px] lg:px-0  md:w-[920px] md:px-0">
            <h4 className={`${styles.heading4} mb-0 text-pink`}>Blog</h4>
            <h1
              className={`${styles.heading1} md:leading-[58px] md:w-[600px]  mx-auto text-center text-black xs:text-[50px] ss:text-[55px] mb-5 xs:leading-[54px] xs:w-[445px] xl:w-[800px]  ss:w-[600px]  lg:w-[728px] sm:w-[] md:mb-[20px] `}
            >
              Language learning apps are a convenient and effective way to start
            </h1>         
          </div>
          <div className="image mb-7 sm:mb-10 relative overflow-hidden lg:h-[480px] border ">
                <img src={blog2} alt="" className="lg:w-[800px] rounded-[32px] lg:h-[] h-[full] xs:w-[90%] mx-auto" />
            </div>
            <div className="content">
                <p 
                className={`mb-6 ${styles.paragraph} text-[18px] text-justify xs:w-[420px] ss:w-[530px] sm:w-[650px] lg:w-[740px] xl:w-[800px] text-veryDimBlue`}>
                <span className="block mb-5">
                Language learning apps are a convenient and effective way to improve your language skills. With a wide variety of apps available for different languages and skill levels, you can find an app that meets your specific needs and preferences.
                </span>
      <span className="block mb-5">
      One of the benefits of language learning apps is that they are accessible and can be used on-the-go. You can practice your language skills anytime, anywhere, whether you have a few minutes during your daily commute or a longer study session at home.
      </span>
      <span className="block mb-5">
      Many language learning apps offer interactive lessons that are tailored to your skill level. These lessons may include vocabulary, grammar, and pronunciation exercises, as well as opportunities to practice speaking, listening, and reading. Some apps even use artificial intelligence to provide personalized feedback and adjust the difficulty level based on your progress.
      </span>
      Another advantage of language learning apps is that they often incorporate gamification elements to make learning more engaging and fun. For example, you may earn points or rewards for completing lessons or achieving certain milestones.
                </p>
            </div>
            </div>
        </div>
     );
}
 
export default Blog2;





