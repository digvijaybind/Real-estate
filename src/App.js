import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./pages/footer/Footer";
import { Header } from "./pages/menu/Header";
import { button } from "./components/commonButton/Commonbutton";
import CommonCard from "./components/card/Card";
import Router from "./route";
function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
