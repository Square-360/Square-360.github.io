import React from "react";
import "./Style/Main-style.css";

import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import Contacts from "./Components/Pages/Contacts/Contacts";
import Home from "./Components/Pages/Home/Home";
import Projects from "./Components/Pages/Projects/Projects";
import PostPage from "./Components/Pages/Blog/PostPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/UI/MyButton/Footer/Footer";
import NotFoundPage from "./Components/Pages/404/NotFoundPage";

function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<Home elementId="home" />} />
          <Route path="/projects" element={<Projects elementId="projects" />} />
          <Route path="/about" element={<About elementId="about" />} />
          <Route path="/contacts" element={<Contacts elementId="contacts" />} />
          <Route
            exact
            path="/blog/:id"
            element={<PostPage elementId="blog" />}
          />
          <Route exact path="/blog" element={<Blog elementId="blog" />} />
          <Route path="*" element={<NotFoundPage elementId="home" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
