import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import User from "./components/User";
import Post from "./components/Post";
import HooksDemo from "./components/hooksDemo";
import UseMemoHook from "./components/useMemoHook";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/user" />
        <Route path="/user" component={User} />
        <Route path="/post" component={Post} />
        <Route path="/hooks" component={HooksDemo} />
        <Route path="/useMemo" component={UseMemoHook} />
      </Switch>
    </Router>
  );
}

export default App;
