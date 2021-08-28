import NavBar from "./components/navbar/navbar";
import Home from "./components/homepage/home";

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
