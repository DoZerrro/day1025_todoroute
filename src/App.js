import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./page/AboutPage";
import MainPage from "./page/MainPage";
import Todo from "./component/Todo";

function App() {
  return (
          <Router>
            <Switch>
              <Route path={'/about'} component={AboutPage}/>
              <Route path={'/main'} component={MainPage}/>

              <Route path={'/todo'} component={Todo}/>

              <Route path={'/'} component={MainPage}/>
            </Switch>
          </Router>
  );
}

export default App;
