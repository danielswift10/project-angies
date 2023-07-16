import { NavLink } from "react-router-dom";
import { logo } from "../../Assets";
import { FooterLinks } from "../../Constants";
import styles from "../../style";
import { Button } from "../../Utils";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className={`${styles.boxWidth} ss:px-6 py-0 md:py-[100px]  sm:px-14 ${styles.padding}`}>
        <div className="footer-loog mb-7 md:mb-8">
          <img src={logo} alt="" />
        </div>

        <div className="footer-links flex flex-col md:gap-6 md:flex-row md:justify-between gap-4">
          <div>
            <ul>
              {FooterLinks.map((item, index) => (
                <>
                  <li className={`${styles.textLink} leading-[48px]`}>
                    <NavLink to={`${item.to}`} className="">
                      {item.text}
                    </NavLink>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <div className="contact">
            <ul className="text-veryDimBlue font-pt text-[16px] md:text-[18px] leading-[48px] ">
              <li>Tel: 1-234-6748-9</li>
              <li>Email: 1-234-6748-9</li>
              <li>12 Terry Francine St San Francisco, CA 94158</li>
            </ul>
          </div>
          <div className="subscribe">
            <h5 className="font-pt text-[16px] md:text-[20px] lg:text-[32px] mb-1 font-bold ">
              Subscriber
            </h5>
            <p className="font-pt text-[16px] mb-6 md:text-[18px] font-normal text-veryDimBlue ">
              Sign up to receive Angie newsletters.
            </p>
            <form className="flex flex-row items-center justify-center gap-3 xs:w-[400px] ">
              <input type="email" required className="w-[70%] border py-[12px] outline-[#8887AE] px-[13px] rounded-[8px] border-[#8887AE] " placeholder="Enter your email" />
              <Button
                type={"submit"}
                title={"Submit"}
                classname={`${
                  styles.image
                } ${"bg-purple shadow-purple font-pt text-white cursor-pointer py-[12px] w-[30%]  rounded-[8px] lg:text-[18px]  md:text-[18px] text-[16px]  font-bold"} `}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="py-5 text-[17px]">Built by:
           <span >
          <a href={'https://linkedin.com/in/daniel-ojeyomi'} target="_blank" className="font-bold"> {""}
           Daniel Swift</a>
          </span>
        </p>
        </div>
    </footer>
  );
};

export default Footer;
