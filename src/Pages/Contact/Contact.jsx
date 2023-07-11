import { useEffect } from "react";

const Contact = (props) => {
    useEffect(() => {
        document.title = props.title || "";
      }, [props.title]);
    
    return ( <div>
    </div> );
}
 
export default Contact;