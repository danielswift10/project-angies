const styles  = {
    boxWidth: "xl:max-w-[1280px] w-full  mx-auto",

    heading1: "font-changa font-normal w-full xl:text-[79px] text-[44px] leading-[46px] tracking-[-1.32px] xl:tracking-[-2.37px]  xl:leading-[74px] xl:w-[519px]  ",
    
    paragraph: "font-pt font-normal text-[16px] leading-[24px] xl:text-[20px] xl:leading-[32px]",
    
    
    link: "font-bold font-pt text-[24px] ",
    
    paragraphSmall: "font-poppins font-semibold text-[14px] xl:leading-[20px]",
    paragraphLarge: "font-poppins font-semibold text-[18px]  xl:leading-[28px]",



    textLink: "font-poppins font-semibold text-[16px] leading-[24px]",
    caption: "font-poppins font-semibold text-[14px] leading-[20px] text-secondary tracking-[3px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexBetween: "flex justify-between items-center",
    flexStartB: "flex justify-between items-start",
    flexEnd: "flex justify-end items-center",
    flexWrap: "flex flex-wrap justify-center",

    paddingX: "sm:px-16 px-7 xl:px-0",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-7 xl:px-0  sm:py-12  py-4",
    padding2: "sm:px-16 px-7 xl:px-0 ",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    image: "transition duration-150 ease-out hover:ease-in  hover:scale-[1.03] object-cover cursor-pointer"
}

 
export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    section1: `flex md:flex-row flex-col`,
    section2: `flex lg:flex-row flex-col`,
    sectionCol: `flex flex-col`,
    
    button: `bg-primary ${styles.flexCenter} gap-4 text-white font-poppins text-[16px] font-semibold xl:leading-[24px] `
}

export default styles;