import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Register from './Register';
import Login from './Login';
import Home from './Home'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />


      </Routes>
    </Router>
  );
}

export default App;
