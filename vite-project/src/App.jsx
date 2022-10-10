import './App.css'
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h2><Link to="/"></Link></h2>
        <Link to="/"></Link>
        <Link to="/"></Link>
      </nav>
    </div>
  );
}

export default App
