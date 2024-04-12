import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureHighlights from "./Components/FeatureHighlights";
import ComingSoon from "./Components/ComingSoon";
import AboutUS from "./Components/AboutUS";
import Connect from "./Components/Connect";

function App() {
  return (
    <div className="App">
      <FeatureHighlights />
      {/* <div style={{ backgroundColor: "#736D6D", height: "1px" }}></div>
      <ComingSoon />
      <div style={{ backgroundColor: "#736D6D", height: "1px" }}></div>
      <AboutUS />
      <div style={{ backgroundColor: "#736D6D", height: "1px" }}></div>
      <Connect /> */}
    </div>
  );
}

export default App;
