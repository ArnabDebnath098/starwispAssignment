import './App.css';
import DashBoard from './DashBoard';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from './Posts';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/posts">
            <Posts/>
          </Route>
          <Route path="/">
            <DashBoard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
