import logo from './logo.svg';
import './App.css';
import './assets/css/all.css';
import './assets/css/style.css';
import Login from './components/Login';
// import Register from './components/Register';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
