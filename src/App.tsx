import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. PUBLIC MARKETING PAGES
import HomePage from './pages/HomePage';
import HowItWorks from './pages/HowItWorks';
import ForBusinesses from './pages/ForBusinesses';
import ForProfessionals from './pages/ForProfessionals';
import Waitlist from './pages/Waitlist';

// 2. AUTHENTICATION FLOWS
import Login from './components/auth/Login';
import SignupGateway from './components/auth/SignupGateway';
import BusinessSignup from './components/auth/BusinessSignup';
import ProfessionalSignup from './components/auth/ProfessionalSignup';

// 3. PROFESSIONAL ONBOARDING & VETTING
import ProfessionalOnboarding from './pages/onboarding/ProfessionalOnboarding';
import AiVettingSession from './pages/vetting/AiVettingSession';

// 4. BUSINESS SHELL & PAGES
import BusinessLayout from './layouts/BusinessLayout';
import ClientDashboard from './components/dashboard/ClientSideDashboard/ClientDashboard';
import NewProject from './components/dashboard/ClientSideDashboard/NewProject';
import ProjectProposals from './components/dashboard/ProfessionalSideDashboard/ProjectProposals';
import ClientMessages from './components/dashboard/ClientSideDashboard/ClientMessages';
import ClientTalentPool from './components/dashboard/ClientSideDashboard/ClientTalentPool';
import ClientEscrow from './components/dashboard/ClientSideDashboard/ClientEscrow';
import ClientSettings from './components/dashboard/ClientSideDashboard/ClientSettings';
import ClientReports from './components/dashboard/ClientSideDashboard/ClientReports';
import ClientProjects from './components/dashboard/ClientSideDashboard/ClientProjects';
import ClientReviews from './components/dashboard/ClientSideDashboard/ClientReviews';
import PublicTrustProfile from './components/dashboard/PublicTrustProfile';

// 5. PROFESSIONAL SHELL & PAGES
import ProfessionalLayout from './layouts/ProfessionalLayout';
import Today from './components/dashboard/ProfessionalSideDashboard/Today/Today';
import Opportunities from './components/dashboard/ProfessionalSideDashboard/Opportunities/Opportunities';
import Projects from './components/dashboard/ProfessionalSideDashboard/Projects/Projects';
import Reputation from './components/dashboard/ProfessionalSideDashboard/Reputation/Reputation';
import Earnings from './components/dashboard/ProfessionalSideDashboard/Earnings/Earnings';
import ProfessionalMessages from './components/dashboard/ProfessionalSideDashboard/ProfessionalMessages';
import Profile from './components/dashboard/ProfessionalSideDashboard/Profile/Profile';
import Settings from './components/dashboard/ProfessionalSideDashboard/Settings/Settings';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/for-businesses" element={<ForBusinesses />} />
        <Route path="/for-professionals" element={<ForProfessionals />} />
        <Route path="/waitlist" element={<Waitlist />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupGateway />} />
        <Route path="/signup/business" element={<BusinessSignup />} />
        <Route path="/signup/professional" element={<ProfessionalSignup />} />

        {/* Vetting Routes */}
        <Route path="/p/onboarding" element={<ProfessionalOnboarding />} />
        <Route path="/p/vetting" element={<AiVettingSession />} />

        {/* Business Protected Routes */}
        <Route path="/b" element={<BusinessLayout />}>
          <Route index element={<Navigate to="/b/dashboard" replace />} />
          <Route path="dashboard" element={<ClientDashboard />} />
          <Route path="projects" element={<ClientProjects />} />
          <Route path="reviews" element={<ClientReviews />} />
          <Route path="project/new" element={<NewProject />} />
          <Route path="proposals" element={<ProjectProposals />} />
          <Route path="messages" element={<ClientMessages />} />
          <Route path="escrow" element={<ClientEscrow />} />
          <Route path="profile" element={<PublicTrustProfile />} />
          <Route path="settings" element={<ClientSettings />} />
          <Route path="professionals" element={<ClientTalentPool />} />
          <Route path="reports" element={<ClientReports />} />
        </Route>

        {/* Professional Protected Routes */}
        <Route path="/p" element={<ProfessionalLayout />}>
          <Route index element={<Navigate to="/p/dashboard" replace />} />
          <Route path="dashboard" element={<Today />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="projects" element={<Projects />} />
          <Route path="reputation" element={<Reputation />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="messages" element={<ProfessionalMessages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback 404 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}

export default App;