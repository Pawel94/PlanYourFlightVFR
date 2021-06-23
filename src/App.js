//import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManualView from "../src/views/ManualView";
import MapView from "../src/views/MapView";
import Sidebar from "../src/Components/Sidebar/Sidebar";
import GlobalStyleComponent from "../src/Theme/MainTheme";
import "./index.css";
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="/" component={MapView}></Route>
        <Route exact path="/mapa" component={MapView}></Route>
        <Route exact path="/weater" component={ManualView}></Route>
      </Switch>

      <GlobalStyleComponent />
    </BrowserRouter>
  );
};

export default App;
