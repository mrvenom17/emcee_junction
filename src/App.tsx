
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import TopLogos from './components/TopLogos';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Corporate from './pages/events/Corporate';
import Academic from './pages/events/Academic';
import Literary from './pages/events/Literary';
import Cultural from './pages/events/Cultural';
import Government from './pages/events/Government';
import Educational from './pages/events/Educational';
import PrivateEvents from './pages/events/PrivateEvents';
import SubscriptionDetails from './pages/subscription/SubscriptionDetails';
import AnchorProfile from './pages/profile/AnchorProfile';
import OrganizerView from './pages/profile/OrganizerView';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-white dark:bg-black">
            <div className="sticky top-0 z-50">
              <TopLogos />
              <Navbar />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events/corporate" element={<Corporate />} />
              <Route path="/events/academic" element={<Academic />} />
              <Route path="/events/literary" element={<Literary />} />
              <Route path="/events/cultural" element={<Cultural />} />
              <Route path="/events/government" element={<Government />} />
              <Route path="/events/educational" element={<Educational />} />
              <Route path="/events/private" element={<PrivateEvents />} />
              <Route path="/subscription/:plan" element={<SubscriptionDetails />} />
              <Route path="/profile" element={<AnchorProfile />} />
              <Route path="/anchor/:id" element={<OrganizerView />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
    
  );
}