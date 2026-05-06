import { useState } from 'react';
import FinancialLanding from './pages/FinancialLanding';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'signup' | 'dashboard'>('landing');

  return (
    <div className="app-container">
      {currentPage === 'landing' && (
        <FinancialLanding onNavigateToSignup={() => setCurrentPage('signup')} />
      )}
      {currentPage === 'signup' && (
        <SignUp onNavigateToDashboard={() => setCurrentPage('dashboard')} />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard onLogout={() => setCurrentPage('landing')} />
      )}
    </div>
  );
}

export default App;
