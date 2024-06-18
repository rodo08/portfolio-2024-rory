import "./index.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
