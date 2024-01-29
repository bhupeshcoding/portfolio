import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Footer />
    </>
  );
}

export default App;
