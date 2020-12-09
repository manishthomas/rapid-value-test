import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Users from './components/Users';
import UserInfo from './components/UserInfo';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/userInfo/:id" component={UserInfo} />
          <Route render={() => <Redirect to={{ pathname: '/users' }} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
