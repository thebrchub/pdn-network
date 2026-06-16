// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/auth/Login';
import SignupGateway from './components/auth/SignupGateway';
// import DashboardLayout from './layouts/DashboardLayout'; // We will create this next
// import BusinessDashboard from './pages/dashboard/BusinessDashboard'; // Placeholder

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupGateway />} />
        
        {/* Protected Routes (Authenticated) */}
        {/* <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<BusinessDashboard />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;