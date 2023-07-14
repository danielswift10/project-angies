import { paris } from "../../Assets";
import { BlogPost } from "../../Constants";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const BlogComp = () => {
    return ( 
        <div className="my-28">
        <div
          className={`${styles.boxWidth}   flex-col   ${styles.flexCenter} ss:px-6 ${styles.padding} gap-10`}
        >
          <div className="heading text-center mb-0 sm:mb-5 ss:px-0 ss:w-[600px] lg:w-[1120px]  xlg:w-[1200px] xl:w-[1280px] lg:px-0  md:w-[920px] md:px-0">
            <h4 className={`${styles.heading4} mb-0 text-pink`}>Our Blog</h4>
            <h2
              className={`${styles.heading2} text-[36px] leading-[56px]  tracking-[-0.96px]`}
            >
              Editorials
            </h2>
          </div>
  
         {
            BlogPost.map((blog, index) => (
                <div
                className={`${styles.flexBetween}   flex-col gap-[48px] md:gap-[30px] lg:gap-[48px]  ${layout.section1} xlg:w-[1200px] xl:w-[1280px]`}
              >
                <div className="image  ">
                  <div className="relative rounded-[34px] overflow-hidden">
                  <img src={blog.image} alt="" className={` ss:w-[590px] lg:w-full`} />
                  </div>
                </div>
                <div className="content ">
                  <h2 className="mb-4">
                    <span
                      className={`${styles.paragraph2} text-purple ss:text-[20px] block mb-2 font-bold`}
                    >
                      {blog.title}
                    </span>
                    <span
                      className={`${styles.heading2} lg:leading-[47px] sm:text-[48px] md:text-[47px]  text-black lg:text-[47px] xlg:text-[55px] xlg:leading-[54px] block text-[32px] ss:w-[600px]  md:w-[420px] lg:w-[480px]  ss:text-[48px] mb-4 text-black leading-[36px] ss:leading-[48px] tracking-[-1.32px] `}
                    >
                      {blog.heading}
                    </span>
                  </h2>
                  <p
                    className={`${styles.paragraph2} mb-8 font-normal  text-veryDimBlue md:w-[400px] md:text-[16px]   xs:text-[18px] mb-6 xs:w-[460px] ss:w-[550px] lg:w-[450px] xl:w-[468px]`}
                  >
                    {blog.content}
                  </p>
      
                  <div
                    
                  >
                    <Button
                      type={"button"}
                      title={"Read More"}
                      classname={`${
                        styles.image
                      } ${"bg-purple shadow-purpleBtn font-pt text-white cursor-pointer py-[12px]  px-[] w-full sm:w-[180px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
                    />
                  </div>
                </div>
              </div>
            ))
         }
        </div>
      </div>
     );
}
 
export default BlogComp;