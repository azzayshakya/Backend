
import './App.css';
import Signup from './Screens/Signup';
import Login from './Screens/Login';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (<Router>
  <Routes>

  <Route exact path='/' element={<Signup/>}/>

       

  </Routes>
  </Router>);
}

export default App;
