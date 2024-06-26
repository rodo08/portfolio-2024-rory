import "./index.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Nav />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
