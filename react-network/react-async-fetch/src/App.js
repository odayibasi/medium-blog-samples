import './App.css';
import {routes} from "./routes";
import {Link, Route, Switch} from "react-router-dom";
import {OtherList} from "./components/OtherList/OtherList";
import {UserList} from "./components/UserList/UserList";


function App() {


  return (
    <div className="App">
        This is a fetch demo..
        <Link to={routes.main.path}>{routes.main.title}</Link>
        <Link to={routes.other.path}>{routes.other.title}</Link>

        <Switch>
          <Route exact path={routes.main.path}><UserList/></Route>
          <Route exact path={routes.other.path}><OtherList/></Route>
        </Switch>
    </div>
  );
}

export default App;
