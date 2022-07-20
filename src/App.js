import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './App/Home/Home';
import About from './App/About/About';
import Jobs from './App/Jobs/Jobs';
import Contact from './App/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const linkstyle = {
    margin: "30px auto",
    textDecoration: "none",
    marginLeft: "50px",
    marginRight: "50px",
    fontSize: "20px"
  };



  return (



    <div className='container'>
    <Router>
      <nav>
        <Link to='/' style={linkstyle}>Home</Link> {"       "}
        <Link to='/about' style={linkstyle}>About</Link>{"       "}
        <Link to='/Jobs' style={linkstyle}>Jobs</Link>{"       "}
        <Link to='/Contact' style={linkstyle}>Contact</Link>{"       "}

      </nav>
    <div className='body'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/jobs' element={<Jobs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
    </Router>

    <footer>

    </footer>
    </div>
  );
}

export default App;
