import "./App.css";
import About from "./Components/About/About";
import Corona from "./Components/About_Corona/Corona";
import Cases from "./Components/Coronavirus_cases/Cases";
import Doctors from "./Components/Doctors/Doctors";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Protect from "./Components/PROTECT_YOURSELF/Protect";
import Update from "./Components/Update/Update";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Corona />
      <Protect />
      <Cases />
      <Doctors />
      <Update />
      <Footer />
    </div>
  );
}

export default App;
