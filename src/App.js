import React from "react";


import Header from "./Header.jsx";
import TitleSection from "./TitleSection.jsx";
import ImagePreview from "./ImagePreview.jsx";
import Description  from "./description.jsx";
import FloatingButtons from "./FloatingButtons.jsx";
import ContactSection from "./contact.jsx";
import Footer from './footer.jsx';
import FooterBottom from './footerBottom.jsx';
import "./App.css";


function App() {
  return (
    <div className="app">
      <Header />
      <TitleSection />
      <ImagePreview />
      <Description />
      <FloatingButtons />
      <ContactSection />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;

