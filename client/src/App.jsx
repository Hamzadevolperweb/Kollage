import { Suspense, lazy, Component } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/ui/Navbar.jsx';
import Footer from './components/ui/Footer.jsx';
import PageWrapper from './components/layout/PageWrapper.jsx';
import LoadingSpinner from './components/ui/LoadingSpinner.jsx';
import CustomCursor from './components/ui/CustomCursor.jsx';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white p-4">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold mb-4 text-brand-gold">Oops! Something went wrong</h1>
            <pre className="text-sm text-red-400 bg-red-900/20 p-4 rounded overflow-auto">
              {this.state.error?.toString()}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-brand-purple rounded hover:bg-brand-gold transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const VideoProduction = lazy(() => import('./pages/VideoProduction.jsx'));
const GraphicDesign = lazy(() => import('./pages/GraphicDesign.jsx'));
const SocialMedia = lazy(() => import('./pages/SocialMedia.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function App() {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-[#0a0a0a] text-white">
        <CustomCursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/video-production"
              element={
                <PageWrapper>
                  <VideoProduction />
                </PageWrapper>
              }
            />
            <Route
              path="/graphic-design"
              element={
                <PageWrapper>
                  <GraphicDesign />
                </PageWrapper>
              }
            />
            <Route
              path="/social-media"
              element={
                <PageWrapper>
                  <SocialMedia />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
    </ErrorBoundary>
  );
}

export default App;
