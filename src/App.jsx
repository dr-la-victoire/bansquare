import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import ExploreCollection from "./components/ExploreCollection";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <MissionVision />
              <Services />
              <Testimonials />
              <Contact />
              <Location />
              <Footer />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route path="/explore-collection" element={<ExploreCollection />} />
      </Routes>
    </>
  );
}

export default App;
