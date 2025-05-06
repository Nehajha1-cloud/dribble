import React from "react";
import Header from "./Header.jsx";
import TitleSection from "./TitleSection.jsx";
import ImagePreview from "./ImagePreview.jsx";
import FloatingButtons from "./FloatingButtons.jsx";
import Description  from "./description.jsx";
import Contact from "./contact.jsx";
import Footer from './footer.jsx'
import FooterBottom from './footerBottom.jsx'
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <TitleSection />
      <ImagePreview />
      <FloatingButtons />
      <Description />
      <Contact />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;

