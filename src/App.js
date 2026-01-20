import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Individualexe from "./components/Individualexe/pages/Individual-Exe";
import ExerciseDetail from "./components/Individualexe/pages/ExerciseDetail";
import Home from "./components/Home/Home";
import Navbar from "./components/Components2/Navbar";
import BMICalculator from "./components/Components2/bmicalculator";
import CalorieCounter from "./components/Components2/CalorieCounter";
//import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import WpApp from "./components/MainExePage/App";
import MealPlanner from "./components/Components2/Mealplanner";

const App = () => (
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/MealPlanner" element={<MealPlanner />}/>
      <Route path="/WpApp" element={<WpApp />} />
      <Route path="/Individualexe" element={<Individualexe />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/bmicalculator" element={<BMICalculator />} />
      <Route path="/CalorieCounter" element={<CalorieCounter />} />
      {/* <Route path="/Login" element={<Login />} /> */}
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  </Box>
);

export default App;
