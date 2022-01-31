import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import LandingPage from "./components/Landing_page";
import Events from "./components/events";
import Projects from "./components/projects";

function App() {
  return (
    <Router>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
