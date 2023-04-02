import "./App.css";
import TabPage from "./components/tabPage/TabPage";
import Announce from "./components/announce/Announce";
import NavbarPage from "./components/navbarPage/NavbarPage";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Announce />
      <NavbarPage />
      <Switch>
        <Route path="/" exact component={TabPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
