
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Sheared/Header/Header';
import AuthProvider from './Contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/booking/:serviceId">
              <Booking></Booking>

            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
