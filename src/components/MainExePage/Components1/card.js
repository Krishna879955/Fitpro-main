// Card.jsx
import React, { useContext } from "react";
import { useWorkoutContext } from "./WorkoutContext";
//import { Button, Stack, Typography } from "@mui/material";
import "./Card.css"
const Cardo = () => {
  const { workoutData } = useWorkoutContext();
  return (
    <div>
      {workoutData && (
        <div>
          <h2 style={{fontSize:"50px" , margin:"auto" ,textAlign:"center"}}>Workout Data</h2>
          <div>
            <h3 style={{fontSize:"50px" , margin:"auto" ,textAlign:"center"}}>Warm Up</h3>
            {workoutData["Warm Up"].map((exercise, index) => (
              <>
                <div class="card" key={index}>
                  <div class="card-details">
                    <p class="text-title">{exercise.Exercise}</p>
                    <p class="text-body">Time :- {exercise.Time}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div>
            <h3 style={{fontSize:"50px" , margin:"auto" ,textAlign:"center"}}>Exercises</h3>
            {workoutData.Exercises.map((exercise, index) => (
              <>
                <div class="card" key={index}>
                  <div class="card-details">
                    <p class="text-title">{exercise.Exercise}</p>
                    <p class="text-body">Sets: {exercise.Sets}</p>
                    <p class="text-body">Reps: {exercise.Reps}</p>
                  </div>
                  
                </div>
              </>
            ))}
          </div>
          <div>
            <h3 style={{fontSize:"50px" , margin:"auto" ,textAlign:"center"}}>Cool Down</h3>
            {workoutData["Cool Down"].map((exercise, index) => (
              <>
                <div class="card" key={index}>
                  <div class="card-details">
                    <p class="text-title">{exercise.Exercise}</p>
                    <p class="text-body">Time :- {exercise.Time}</p>
                  </div>
                  
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cardo;
