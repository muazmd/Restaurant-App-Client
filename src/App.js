import './App.css';

import { Home } from 'Pages/Home/Home';
import { Menu } from 'Pages/Menu/Menu';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Register } from 'Pages/Register/Register';



function App() {
  return (
    <div className="App">
      <Router>
    <Switch>
<Route path='/' exact>

   <Home />
</Route>
<Route path='/menu'>

   <Menu />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
    </Switch>
</Router>
    </div>
  );
}

export default App;

