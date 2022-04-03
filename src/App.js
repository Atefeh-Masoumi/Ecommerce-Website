
import './App.css';
import Layout from './Layout/Layout';
import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Homepage/>
    </div>

    </Router>
  );
}

export default App;
