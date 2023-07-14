import { useEffect } from "react";
import styles from "../../style";
import BlogComp from "../../Components/Blog/BlogComp";

const Blog = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div>
      <BlogComp/>
    </div>
  );
};

export default Blog;
