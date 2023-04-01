import "./App.css";
import TabPage from "./components/tabPage/TabPage";
import Announce from "./components/announce/Announce";
import NavbarPage from "./components/navbarPage/NavbarPage";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Announce />
      <NavbarPage />
      <TabPage />
      <Footer />
    </>
  );
}

export default App;
