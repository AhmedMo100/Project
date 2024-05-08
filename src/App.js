import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import SignUpForm from './Components/Sign-up/sign-up';
import LogInForm from './Components/Log-in/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/login' element={<LogInForm />} />
      </Routes>
    </Router>
  );
}

export default App;
