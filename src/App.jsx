import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import Home from "./component/home/home";
import Services from "./component/services/services";
import { useEffect } from "react";

const Pages = () => {
  const location = useLocation();

  return (
    <>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/services">
          <Services/>
        </Route>
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

function App() {
  return (
      <div>
        <div>{/** BackDrop and popup component */}</div>
        <div id="leftSide">{/** Logo and wifi signal animated image */}</div>
        <div id="authContainer">
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
