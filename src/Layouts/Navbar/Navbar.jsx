import { useEffect, useRef, useState } from "react";
import { close, hamburger, logo } from "../../Assets";

import { NavLinks } from "../../Constants";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "../../style";

import { Button } from "../../Utils";

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

  // useEffect(() => {
  //   const handleClickLink = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       setToggle(false);
  //     }
  //   };
  //   document.addEventListener("click", handleClickLink, true);
  //   return () => {
  //     document.removeEventListener("click", handleClickLink, true);
  //   };
  // });

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
      } w-full mx-auto fixed  top-0 z-20 md:px-16  ${styles.paddingX}  `}
    >
      <div
        className={`bg-white  md:p-0 ${styles.flexBetween}  ${styles.boxWidth}
        ${scrolled ? "md:py-0 py-[25px]" : "md:py-3 py-8"}`}
      >
        <div className="nav-logo ">
          <Link
            to={"/"}
            className="logo "
            onClick={() => {setActive(NavLinks[0].title)
              setToggle(false);}}
          >
            <img
              src={logo}
              alt="angies"
              className="w-[118px] object-contain md:w-[] xl:w-[168px] lg:w-[150px] cursor-pointer "
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
                {active === nav.title ? (
                  <div className="flex items-center w-full justify-center">
                    <div className="absolute w-[5px] h-[5px] bg-pink bottom-4  rounded-full " />
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={`md:flex ${styles.flexCenter} gap-[33px] hidden  `}>
          <NavLink to={"/sign-in"} className="sign">
            <Button
              type={"button"}
              title={"Sign In"}
              classname={`${"hover:text-purple bg-transparent font-pt text-pale cursor-pointer px-2 text-[16px] md:text-[18px] xl:text-[24px] lg:text-[22px] font-bold"} `}
            />
          </NavLink>
          <NavLink to={"/join-us"} className="join">
            <Button
              type={"button"}
              title={"Join us"}
              classname={`${
                styles.image
              } ${"bg-purple shadow-purpleBtn font-pt text-white cursor-pointer py-[8px]  px-[24px] rounded-[8px] lg:text-[22px] xl:text-[24px]  md:text-[20px] text-[16px]  font-bold"} `}
            />
          </NavLink>
        </div>
        <div className="md:hidden ">
          {toggle ? (
            <img src={close} alt="" className="w-[24px] " onClick={() => setToggle(false)} />
          ) : (
            <img src={hamburger} alt="" onClick={() => setToggle(true)} />
          )}
        </div>
      </div>
      {toggle && (
        <div
          className={`fixed bg-white z-20 top-16 min-h-screen  w-full   md:hidden  z-10`}
          style={{
            left: toggle ? "0px" : "-300px",
          }}
        >
          <div className="flex items-center text-center flex-col  justify-center ">
            <ul className="flex flex-col py-12 gap-6">
              {NavLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`relative cursor-pointer font-pt py-2  font-bold text-[24px] ${
                    active === nav.title
                      ? "text-purple pointer-events-none "
                      : "text-pale  hover:text-purple"
                  }
                  ${
                    index === NavLinks.length
                      ? "mr-0"
                      : " text-[15px] font-bold font-pt md:text-[18px] lg:text-[22px] xl:text-[24px] lg:leading-[24px]   "
                  } `}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <NavLink to={`${nav.to}`} className="">
                    {nav.title}
                  </NavLink>
                  {active === nav.title ? (
                    <div className="flex items-center w-full justify-center">
                      <div className="absolute w-[5px] h-[5px] bg-pink bottom-[-3px]  rounded-full " />
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              ))}
              <div className={`flex flex-col py-2 ${styles.flexCenter} gap-3   `}>
                <div className="sign">
                 <NavLink to={"/sign-in"} onClick={() => {
                      setToggle(false);
                    }}>
                 <Button
                    type={"button"}
                    title={"Sign In"}
                    classname={`${"hover:text-purple bg-transparent font-pt text-pale cursor-pointer px-2 text-[24px]  lg:text-[22px] font-bold"} `}
                  />
                 </NavLink>
                </div>
                <div className="join py-8">
                  <NavLink to={"/join-us"} onClick={() => {
                      setToggle(false);
                    }}>
                  <Button
                    type={"button"}
                    title={"Join us"}
                    classname={`${
                      styles.image
                    } ${"bg-purple shadow-purpleBtn font-pt text-white cursor-pointer py-[10px] w-[220px] px-[24px] rounded-[8px] text-[24px]  font-bold"} `} 
                  />
                  </NavLink>
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

{
  /* <div className="flex items-end  py-[10px] flex-col  justify-end ">
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
</div> */
}
