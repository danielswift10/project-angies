// import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  Footer, Navbar } from "./Layouts";
import {
  About,
  Blog,
  Contact,
  Courses,
  Home
} from "./Pages"
import ScrollToTop from "./Components/ScrollToTop";
// import { Blog, Contact, PrivacyPolicy } from "./Pages";
// import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
// import { TrendingBlog1 } from "./Components/Blog";

// const Home = lazy(() => import("../src/Pages/Home/Home"));
// const Service = lazy(() => import("../src/Pages/Service/Service"));
// const Company = lazy(() => import("../src/Pages/Company/Company"));
// const Career = lazy(() => import("../src/Pages/Career/Career"));
// // const Blog = lazy(() => import("../src/Pages/Blog/Blog"));
// const JobApplication = lazy(() =>
//   import("./Components/Career/JobApplication/JobApplication")
// );

const App = () => {
  function handleContextMenu(e) {
    e.preventDefault();
  }
  return (
    <div className="App" onContextMenu={handleContextMenu}>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home title="Angies" />} />
            <Route path="/about" element={<About title="Angies | About" />} />
            <Route path="/courses" element={<Courses title="Angies | Courses" />} />
            <Route path="/blog" element={<Blog title="Angies | Blog" />} />
            <Route path="/contact" element={<Contact title="Angies | Contact" />} />

          </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
};
export default App;
