import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { store } from "./services/store"
import { Provider } from 'react-redux'
import App from "./components/App/app"
import { BrowserRouter } from 'react-router-dom'
import { render } from "react-dom"
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react"


const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);


// reportWebVitals();
