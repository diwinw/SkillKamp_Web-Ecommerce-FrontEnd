import "./App.css";
import TabPage from "./components/tabPage/TabPage";
import Announce from "./components/announce/Announce";
import NavbarPage from "./components/navbarPage/NavbarPage";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signIn/SignUp";
import Test from "./components/test/test";
import PaymentPage from "./components/payment/Payment";
import ReviewPage from "./components/reviewPage/ReviewPage";
import Chatbot from "./components/chatBot/ChatBot";
// import Chatbot from "./components/test/ChatBot";
// import PicturePuzzle from "./components/test/PicturePuzzle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PicturePuzzle from "./components/test/PicturePuzzle";
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
        <Route path="/payment" exact component={PaymentPage} />
        <Route path="/review" exact component={ReviewPage} />
        <Route path="/chatbot" exact component={Chatbot} />
        {/* <Route path="/cart" exact component={Cart} /> */}
        <Route path="/cart" render={() => <TabPage page="cart" />} />
        <Route path="/game" exact component={PicturePuzzle} />
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
