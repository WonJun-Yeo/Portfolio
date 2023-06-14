import './styles/reset.css';
import './styles/init.css';
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
