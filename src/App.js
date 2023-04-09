import "./App.css";
import TabPage from "./components/tabPage/TabPage";
import Announce from "./components/announce/Announce";
import NavbarPage from "./components/navbarPage/NavbarPage";
import Footer from "./components/footer/Footer";
import Detail from "./components/detail/Detail";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signIn/SignUp";
import Test from "./components/test/test";
import Cart from "./components/cart/Cart";
// import Chatbot from "./components/test/ChatBot";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Announce />
      <NavbarPage />
      <Switch>
        <Route path="/" exact component={TabPage} />
        {/* <Route path="/products" exact component={Detail} /> */}
        <Route path="/products" render={() => <TabPage page="detail" />} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/test" exact component={Test} />
        {/* <Route path="/cart" exact component={Cart} /> */}
        <Route path="/cart" render={() => <TabPage page="cart" />} />
        {/* <Route path="/chat" exact component={Cart} /> */}
        <Route path="/shop-collection" render={() => <TabPage page="shop" />} />
        <Route path="/story" render={() => <TabPage page="story" />} />
        <Route path="/contact" render={() => <TabPage page="home" />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
