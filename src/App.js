import './styles/reset.css';
import './styles/init.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Skills from "./components/main/Skills";
import Works from "./components/main/Works";
import UpToTop from "./components/UpToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
      <UpToTop />
      <Footer />
    </div>
  );
}

export default App;
