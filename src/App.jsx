import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "slick-carousel/slick/slick.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import NewBlog from "./Pages/NewBlog";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";



function App() {
  return (
    <Router>
      <div className="w-11/12 mx-auto md:w-10/12 md:mx-auto">
      <Navbar />
      <Banner/>
       <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/create" element={<NewBlog />} /> 
         <Route path="/blogs/:id" element={<BlogDetails/>} />
         <Route path="/Login" element={<Login/>} />
         <Route path="/SignUp" element={<SignUp/>} />
         <Route path="*" element={<NotFound />} /> 
      </Routes>
       <Footer/>
     </div>
    </Router>
  )
}

export default App
