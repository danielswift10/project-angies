import { NavLink } from "react-router-dom";
import { paris } from "../../Assets";
import { BlogPost } from "../../Constants";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const BlogComp = () => {
    return ( 
        <div className="my-40">
        <div
          className={`${styles.boxWidth}   flex-col   ${styles.flexCenter} ss:px-6 ${styles.padding} gap-10`}
        >
          <div className="heading text-center mb-0 sm:mb-5 md:mb-10 ss:px-0 ss:w-[600px] lg:w-[1120px]  xlg:w-[1200px] xl:w-[1280px] lg:px-0  md:w-[920px] md:px-0">
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
                className={`${styles.flexBetween} mb-10  flex-col gap-[23px] md:gap-[30px] lg:gap-[48px]  ${layout.section1} xlg:w-[1200px] xl:w-[1280px]`}
              >
                <div className="image  ">
                  <div className="relative rounded-[34px] overflow-hidden">
                  <img src={blog.image} alt="" className={` ss:w-[590px] lg:w-full`} />
                  </div>
                </div>
                <div className="content ">
                  <h2 className="mb-4">
                    <span
                      className={`${styles.paragraph2} text-pink ss:text-[20px] block mb-2 font-bold`}
                    >
                      {blog.title}
                    </span>
                    <span
                      className={`${styles.heading2} lg:leading-[45px] sm:text-[48px] md:text-[36.5px] md:leading-[42px]  text-black lg:text-[45px] lg:leading-[46.5px] xlg:text-[54px] xlg:leading-[54px] block text-[32px] ss:w-[600px]  md:w-[420px] lg:w-[480px] xlg:w-[580px] ss:text-[48px] mb-2 text-black leading-[36px] ss:leading-[48px] sm:leading-[58px] tracking-[-1.32px] `}
                    >
                      {blog.heading}
                    </span>
                  </h2>
                  <p
                    className={`${styles.paragraph2} mb-8 font-normal md:mt-[-5px] text-veryDimBlue md:w-[400px] md:text-[16px] lg:text-[18px] xlg:text-[20px]    xs:text-[18px] mb-6 xs:w-[460px] ss:w-[550px] lg:w-[450px] xl:w-[468px]`}
                  >
                    {blog.content}
                  </p>
      
                  <div
                    
                  >
                   <NavLink to={blog.to}>
                   <Button
                      type={"button"}
                      title={"Read More"}
                      classname={`${
                        styles.image
                      } ${"bg-purple shadow-purpleBtn font-pt text-white cursor-pointer py-[12px]  px-[] w-full sm:w-[180px] rounded-[8px] lg:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
                    />
                   </NavLink>
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