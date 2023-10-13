import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { store } from "./services/store"
import { Provider } from 'react-redux'
import App from "./components/App/app"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
