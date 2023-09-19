import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { store } from "./services/store"
import { Provider } from 'react-redux'
// import { router } from "./pages/router"
// import { RouterProvider} from "react-router-dom";
import App from "./components/App/app"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
