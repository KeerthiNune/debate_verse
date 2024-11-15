import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register',{email,password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err))
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError(null);
    console.log({ email, password });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-4 rounded w-25 shadow">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control rounded-0"
            />
          </div>
          {error && <div className="text-danger mb-3">{error}</div>}
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
        <div className="mt-3 text-center">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
