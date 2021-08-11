
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
 //This Switch Componenet ensures that only one route show at any time.
 //and all of our route go under the switch component.
 // If we only write path instead of exact path then it will always send us the home data / is there in all
 //thats why we are saying react to use exact path here.

  return (
    <Router>
    <div className="App"> 
    <Navbar/>
      <div className="content">
        <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/create"><Create/></Route>
      <Route exact path="/blogs/:id"><BlogDetails/></Route>
      <Route path="*">
        <NotFound/>
      </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
/// we always export the component so that we can use it in another files.


