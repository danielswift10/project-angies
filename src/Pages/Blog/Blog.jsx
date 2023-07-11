import { useEffect } from "react";

const Blog = (props) => {
    useEffect(() => {
        document.title = props.title || "";
      }, [props.title]);
    
    return ( 
        <div>

        </div>
     );
}
 
export default Blog;