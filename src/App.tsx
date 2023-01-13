import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/404Error/error";
import LoginSignup from "./pages/login";
import LandingPage from "./components/Product/ProductLanding";
import TestCardsPage from "./pages/TestCardsPage";
import LessionPage from "./pages/LessonPage";
import CallCoach from "./pages/CallCoach";
import Layout from "./components/Layout/layout";
import Test from "./components/TestUI/test";
import Profile from "./pages/Profile";
import SkillsPage from "./pages/SkillsPage";
import CallSuccessPage from "./pages/CallSuccessPage";
import { loggedIn } from "./components/constants/constants";

function App() {
  return (
    <>
      {!loggedIn ? (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/callcoach" element={<CallCoach />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/signup" element={<></>} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </Router>
      ) : (
        <Router>
          <Layout>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<LandingPage />} />
              <Route
                path="/callcoach"
                element={
                  <>
                    <CallCoach />
                  </>
                }
              />
              <Route path="/test" element={<Test />} />
              <Route path="/testcards" element={<TestCardsPage />} />
              <Route path="/test" element={<Test />} />
              <Route path="/testcards" element={<></>} />
              <Route path="/lesson" element={<LessionPage />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/signup" element={<></>} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/callsuccess" element={<CallSuccessPage />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </>
  );
}

export default App;
