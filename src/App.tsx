import "./App.css";
import Home from "./pages/Home";
import Footer from "./component/common/footer";
import { Route, Routes } from "react-router-dom";
import Header from "./component/common/header";
import Auth from "./pages/auth";
import Headroom from "react-headroom";

const App = () => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth/signup" element={<Auth />}></Route>
        <Route path="/auth/signin" element={<Auth />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
