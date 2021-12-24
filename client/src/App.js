import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Voting from './pages/voting'
import Home from './pages/Home'
import RegisterPage from './pages/Register';
import Instructions from './pages/instructionsPage/Instructions';
import LoginPage from './pages/Login';


function App() {

  return (
    <div className="App">
      
                 
          <Switch>
            <Route path='/' exact component={Home}  />
            <Route path='/voting' exact component={Voting}/>
            <Route path='/instructions' exact component={Instructions} />
            <Route path='/register' exact component={RegisterPage} />
            <Route path='/login' exact component={LoginPage} />

          </Switch>
        
    

    </div>
  );
  }

export default App;
