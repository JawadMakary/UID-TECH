import "./App.css";
// import firebaseApplication from './lib/firebase';
// import i18n from "./i18n";
// import { withNamespaces } from "react-i18next";
import { CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
// Pages
const Home = lazy(() => import("./pages/Home/index"));
const loading = (
  <div className="loading_container">
    <div className="sk-spinner sk-spinner-pulse loading_spinner">
      {" "}
      <CircularProgress size={35} />
    </div>
  </div>
);
function App() {
  return (
    <div className="">
      <div className="app">
        <Router>
          <Suspense fallback={loading}>
           <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
           </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}

export default App;
