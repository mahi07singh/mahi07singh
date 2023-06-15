import "./App.css";
import Header from "./component/common/header";
import Footer from "./component/common/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Headroom from "react-headroom";

const App = () => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
