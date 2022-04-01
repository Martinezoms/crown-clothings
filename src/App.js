import { NavBar, Footer } from "./components";
import { HomePage } from "./routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
