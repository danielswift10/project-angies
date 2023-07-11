import { useEffect } from "react";

const Courses = (props) => {
    useEffect(() => {
        document.title = props.title || "";
      }, [props.title]);
    
    return ( 
        <div>
        </div>
     );
}
 
export default Courses;