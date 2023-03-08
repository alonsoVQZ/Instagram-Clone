import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

// Componets
import App from "./App";

// Style
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));


function Root() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  )
}


root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

