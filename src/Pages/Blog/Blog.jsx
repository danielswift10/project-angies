import { useEffect } from "react";
import styles from "../../style";

const Blog = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div>
      
    </div>
  );
};

export default Blog;
