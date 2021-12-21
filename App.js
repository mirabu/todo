import Navbar  from "./componants/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../src/App.css'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import Home from "./routingpart/Home";
import Features from "./routingpart/Features"
import Pricing from "./routingpart/Pricing";
import productmanager from "./routingpart/productmanager";


function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
    <Switch>
    <Route exact path="/" component={productmanager}></Route>
    <Route exact path="/Home" component={Home}></Route>
    <Route exact path="/Features" component={Features}></Route>
    <Route exact path="/Pricing" component={Pricing}></Route>
    </Switch>
</Router>
     
           


        
    </div>
  );
}

export default App;
