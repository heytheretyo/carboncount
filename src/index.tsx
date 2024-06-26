import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import Header from "./components/Header/Header";
import Daily from "./components/Charts/CarbonChart";
import Monthly from "./components/Charts/PowerChart";
import Ticker from "./components/Ticker/Ticker";

import "./index.css";

const App = function (view_name: string) {
  return (
    <>
      <Header />
      <Ticker />
    </>
  );
};

const view = App("pywebview");

const element = document.getElementById("app");
ReactDOM.render(view, element);

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
