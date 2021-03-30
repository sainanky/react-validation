import logo from './logo.svg';
import './App.css';
import './assets/css/all.css';
import './assets/css/style.css';
import Login from './components/Login';
// import Register from './components/Register';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { mobileValidation, mPinValidation} from './validation';

const validate = {
  mobile: mobileValidation,
  mpin: mPinValidation,
};

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" validate={validate} component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
