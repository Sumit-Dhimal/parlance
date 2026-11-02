import { Outlet } from "react-router";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default App;
