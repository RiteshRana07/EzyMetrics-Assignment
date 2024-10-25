import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import LeadManagement from './components/LeadManagement';
import PerformanceChart from './components/PerformanceChart';
import ReportGeneration from './components/ReportGeneration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leads" element={<LeadManagement />} />
        <Route path="/analytics" element={<PerformanceChart />} />
        <Route path="/reports" element={<ReportGeneration />} />
      </Routes>
    </Router>
  );
};

export default App;