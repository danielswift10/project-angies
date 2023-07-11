
import { useEffect, useRef, useState } from "react";
import {hamburger, logo} from "../../Assets"

import { NavLinks } from "../../Constants";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "../../style";


import {Button} from "../../Utils"

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(
    NavLinks.find((navLink) => navLink.to === location.pathname)?.title ||
      NavLinks[0].title
  );
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 55) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const handleClickLink = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleClickLink, true);
    return () => {
      document.removeEventListener("click", handleClickLink, true);
    };
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setActive(
      NavLinks.find((navLink) => navLink.to === location.pathname)?.title ||
        NavLinks[0].title
    );
  }, [location.pathname]);

  return (
    <nav
      className={`${
        scrolled ? "bg-white border-b border-b-gray" : "bg-white"
      } w-full mx-auto fixed top-0 z-20 md:px-16 `}
    >
      <div
        className={`bg-white py-7 lg:py-3  md:p-0 ${styles.flexBetween} ${styles.paddingX} ${styles.boxWidth}`}
      >
        <div className="nav-logo ">
          <Link
            to={"/"}
            className="logo "
            onClick={() => setActive(NavLinks[0].title)}
          >
            <img
              src={logo}
              alt="angies"
              className="w-[118px] object-contain md:w-[100px] xl:w-[168px] lg:w-[150px] cursor-pointer "
            />
          </Link>
        </div>
        <div className="navbar-links-desk  md:flex md:flex-row hidden md:justify-between  md:items-center">
          <ul className="flex gap-12 md:gap-10">
            {NavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`relative cursor-pointer font-pt py-7  font-bold text-[16px] ${
                  active === nav.title
                    ? "text-purple   pointer-events-none "
                    : "text-pale  hover:text-purple"
                }
                                ${
                                  index === NavLinks.length
                                    ? "mr-0"
                                    : " text-[15px] font-bold    md:text-[18px] lg:text-[22px] xl:text-[24px] lg:leading-[24px]   "
                                }`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <NavLink to={`${nav.to}`} className="">
                  {nav.title}
                </NavLink>
                <div className="flex items-center border w-full hidden hover:flex justify-center"><div className="absolute w-[4px] h-[4px] bg-pink bottom-5  rounded-full "/></div>
              </li>
              
            ))}
          </ul>
         
        </div>
        <div className={`md:flex ${styles.flexCenter} gap-[33px] hidden  `}>
            <div className="sign">
                <Button type={"button"} title={"Sign In"} classname={`${'hover:text-purple bg-transparent font-pt text-pale cursor-pointer px-2 text-[16px] md:text-[18px] xl:text-[24px] lg:text-[22px] font-bold'} `}/>

            </div>
            <div className="join">
            <Button type={"button"} title={"Join us"} classname={`${styles.image} ${'bg-purple shadow-purpleBtn font-pt text-white cursor-pointer py-[8px]  px-[24px] rounded-[8px] lg:text-[22px] xl:text-[24px]  md:text-[20px] text-[16px]  font-bold'} `}/>
            </div>
          </div>
        <div className="md:hidden ">
          {toggle ? (
            <img src={hamburger} alt="" onClick={() => setToggle(true)} />
          ) : (
            <img src={hamburger} alt="" onClick={() => setToggle(true)} />
          )}
        </div>
      </div>
      {toggle && (
        <div
          className={`fixed navbar-bg bg-[#00000080] z-20 top-0 min-h-screen  w-full   md:hidden  z-10`}
          style={{
            left: toggle ? "0px" : "-300px",
          }}
        >
          <div
            className="w-[250px] z-20  navbar-mobile min-h-screen fixed top-0 z-20 "
            ref={ref}
          >
            <div className="flex items-end  py-[10px] flex-col  justify-end ">
             
              <ul className="flex pe-20 mt-10 flex-col gap-10">
                {NavLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer font-normal font-poppins text-[16px] w-full ${
                      active === nav.title
                        ? "text-white pl-[20px] border-l-[3px] pt-[] border-l-orange pointer-events-none "
                        : "text-gray pl-[20px]  hover:text-white"
                    }
                      ${index === NavLinks.length - 1 ? "mr-0" : "mr-10"} `}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    <NavLink to={`${nav.to}`} className="">
                      {nav.title}
                    </NavLink>
                  </li>
                ))}
        
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
