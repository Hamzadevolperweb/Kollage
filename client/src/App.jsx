import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/ui/Navbar.jsx';
import Footer from './components/ui/Footer.jsx';
import PageWrapper from './components/layout/PageWrapper.jsx';
import LoadingSpinner from './components/ui/LoadingSpinner.jsx';
import CustomCursor from './components/ui/CustomCursor.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const VideoProduction = lazy(() => import('./pages/VideoProduction.jsx'));
const GraphicDesign = lazy(() => import('./pages/GraphicDesign.jsx'));
const SocialMedia = lazy(() => import('./pages/SocialMedia.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function App() {
  const location = useLocation();

  return (
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
  );
}

export default App;
