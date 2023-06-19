import "./App.css";
import Header from "./component/common/header";
import Footer from "./component/common/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Headroom from "react-headroom";
import Auth from "./pages/auth";

const App = () => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth/signup" element={<Auth />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
