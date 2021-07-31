import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu'
import Checkout from './Components/Checkout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'  


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Menu" component={Menu}/>
        <Route exact path="/Checkout" component={Checkout}/>
      </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
