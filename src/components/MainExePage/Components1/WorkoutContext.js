// WorkoutContext.js
import React, { createContext, useState, useContext } from 'react';

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  const [time, setTime] = useState('');
  const [equipments, setEquipments] = useState('');
  const [muscle, setMuscle] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [workoutData, setWorkoutData] = useState(null);

  return (
    <WorkoutContext.Provider value={{
      time,
      setTime,
      equipments,
      setEquipments,
      muscle,
      setMuscle,
      fitnessLevel,
      setFitnessLevel,
      fitnessGoal,
      setFitnessGoal,
      loading,
      setLoading,
      error,
      setError,
      workoutData,
      setWorkoutData
    }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkoutContext = () => {
  return useContext(WorkoutContext);
};
