import NavBar from "./components/navbar/navbar";
import Home from "./components/homepage/home";
import "./styles/output.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Home />
      </div>
    </div>
  );
};

export default App;
