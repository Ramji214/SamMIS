import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from"./pages/Home";
import Login from"./pages/Login";
import{BrowserRouter as Router,Route,Routes} from"react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>   
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} /> 
       </Routes>
       <login/>
       <Footer />
      </Router>
  
    </div>
  );
}

export default App;
