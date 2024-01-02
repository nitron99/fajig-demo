import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";

import "../global.scss";

//routes
import HomePage from "../views/homePage/HomePage";
import CoachingProgramPage from "../views/coachingProgramPage/CoachingProgramPage";
import TrainingPage from "../views/trainingPage/TrainingPage";
import NavBar from "../components/navBar/NavBar";

const MainRoutes = () => (
  <Router>
    <NavBar />
    <Routes>
      {/** Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/career-consultation-for-software-developers" element={<CoachingProgramPage />} />
      <Route path="/how-to-find-a-job-in-germany-as-a-software-developer-in-2-months" element={<TrainingPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default MainRoutes;
