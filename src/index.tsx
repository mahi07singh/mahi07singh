import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import './App.css';

ReactDOM.render(
  <BrowserRouter>
  {/* <Provider store={store}> */}
    <App />
  {/* </Provider> */}
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
