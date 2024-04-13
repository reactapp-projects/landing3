import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import FeatureHighlights from "./Components/FeatureHighlights";
import ComingSoon from "./Components/ComingSoon";
import AboutUS from "./Components/AboutUS";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Button>Hello</Button>
      </header> */}
      <Header />
      <FeatureHighlights />
      <div style={{ backgroundColor: "#736D6D", height: "1px" }}></div>
      <ComingSoon />
      <div style={{ backgroundColor: "#736D6D", height: "1px" }}></div>
      <AboutUS />
      <Footer />
    </div>
  );
}

export default App;
