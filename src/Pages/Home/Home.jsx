import { useEffect } from "react";
import { BlogPost, Chats, GetStarted, Hero, OurServices, Testimonials } from "../../Components/Home";

const Home = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div className="">
      <Hero/>
      <OurServices/>
      <Chats/>
      <Testimonials/>
      <BlogPost/>
      <GetStarted/>
    </div>
  );
};

export default Home;
