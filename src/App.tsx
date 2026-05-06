import { Routes, Route, useNavigate } from 'react-router-dom';
import FinancialLanding from './pages/FinancialLanding';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<FinancialLanding onNavigateToSignup={() => navigate('/signup')} />} />
        <Route path="/signup" element={<SignUp onNavigateToDashboard={() => navigate('/dashboard')} />} />
        <Route path="/signin" element={<SignIn onNavigateToDashboard={() => navigate('/dashboard')} />} />
        <Route path="/dashboard" element={<Dashboard onLogout={() => navigate('/')} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
