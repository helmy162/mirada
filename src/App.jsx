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
import Requests from "./component/requests/requests";
import Login from "./component/admin/login/login";
import Dashboard from "./component/admin/dashboard/dashboard";
import Report from "./component/admin/report/report";
import roomTable from "./component/admin/roomTable/roomTable";
import Rooms from "./component/admin/rooms/rooms";

const Pages = () => {
  const location = useLocation();

  return (
    <>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/requests">
          <Requests />
        </Route>
        <Route path="/services">
          <Services/>
        </Route>
        <Route path="/admin">
          <Login/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/report">
          <Report/>
        </Route>
        <Route path="/roomsetup">
          <Rooms/>
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
