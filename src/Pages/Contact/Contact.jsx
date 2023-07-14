import { useEffect } from "react";
import Hero from "../../Components/Contact/Hero";
import ContactForm from "../../Components/Contact/ContactForm";

const Contact = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div>
      <Hero/>
      <ContactForm/>
    </div>
  );
};

export default Contact;
