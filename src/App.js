import "./App.css";
import TabPage from "./components/tabPage/TabPage";
import Announce from "./components/announce/Announce";
import NavbarPage from "./components/navbarPage/NavbarPage";
import Footer from "./components/footer/Footer";
import Detail from "./components/detail/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Announce />
      <NavbarPage />
      <Switch>
        <Route path="/" exact component={TabPage} />
        <Route path="/products" exact component={Detail} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
