import "./App.css";
import TabPage from "./components/tabPage/TabPage";
import Announce from "./components/announce/Announce";
import NavbarPage from "./components/navbarPage/NavbarPage";
import Footer from "./components/footer/Footer";
import Detail from "./components/detail/Detail";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signIn/SignUp";
import Test from "./components/test/test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Announce />
      <NavbarPage />
      <Switch>
        <Route path="/" exact component={TabPage} />
        <Route path="/products" exact component={Detail} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/test" exact component={Test} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
