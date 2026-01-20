// main.jsx
import React from 'react';
//import ReactDOM from 'react-dom/client';
import { WorkoutContextProvider } from './Components1/WorkoutContext';
import Input from './Components1/Input';
import Cardo from './Components1/card';

const WpApp = () => {
  return (
    <WorkoutContextProvider>
      <div>
        <h1 style={{fontSize:"50px" , margin:"auto" ,textAlign:"center"}}>Workout Planner</h1>
        <Input />
        <Cardo />
      </div>
    </WorkoutContextProvider>
  );
};
export default WpApp;

