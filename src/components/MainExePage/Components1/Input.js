// Input.jsx
import React, { useContext } from "react";
import { WorkoutContext } from "./WorkoutContext";
import './Input1.css'

const timeOptions = ["", "10 min", "15 min", "20 min", "25 min", "30 min" , "35 min" , "40 min"];

const Input = () => {
  const {
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
    setError,
    setWorkoutData,
  } = useContext(WorkoutContext);

  const Timeinput = (e) => {
    setTime(e.target.value);
  };

  const Equipments = (e) => {
    setEquipments(e.target.value);
  };

  const Muscles = (e) => {
    setMuscle(e.target.value);
  };

  const Fitnesslevel = (e) => {
    setFitnessLevel(e.target.value);
  };

  const Fitnessgoal = (e) => {
    setFitnessGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const url = `https://workout-planner1.p.rapidapi.com/customized?time=${time}&equipment=${equipments}&muscle=${muscle}&fitness_level=${fitnessLevel}&fitness_goals=${fitnessGoal}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": '2c35e2af3fmsh38a6733eadb7e41p1dd52ajsn94aecce0f79f',
        "X-RapidAPI-Host": "workout-planner1.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setWorkoutData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-feild  time">
        <label>Time:</label>
        <select value={time} onChange={Timeinput}>
          {timeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="input-feild equip">
        <label>Select Equipments:</label>
        <select value={equipments} onChange={Equipments} 
        >
          <option value="">None</option>
          <option value="dumbbells">Dumbbells</option>
          <option value="Punching Bag">Punching Bag</option>
          <option value="Pull Up Bar">Pull Up Bar</option>
          <option value="Battle Rope">Battle Rope</option>
          <option value="Barbells">Barbells</option>
          <option value="Medicine Ball">Medicine Ball</option>
          <option value="Plates">Plates</option>
        </select>
      </div>
      <div className="input-feild muscles">
        <label>Muscles:</label>
        <select value={muscle} onChange={Muscles}>
          <option value="">None</option>
          <option value="biceps">Biceps</option>
          <option value="Back">Back</option>
          <option value="Chest">Chest</option>
          <option value="Legs">Legs</option>
          <option value="Triceps">Triceps</option>
          <option value="Forearms">Forearms</option>
          <option value="Abs">Abs</option>
          <option value="Lats">Lats</option>
          <option value="Calf">Calf</option>
        </select>
      </div>
      <div className="input-feild fit-lev">
        <label>Fitness Level:</label>
        <select value={fitnessLevel} onChange={Fitnesslevel}>
          <option value="">None</option>
          <option value="beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="input-feild goal">
        <label>Fitness Goal:</label>
        <select value={fitnessGoal} onChange={Fitnessgoal} required>
          <option value="">None</option>
          <option value="weight Loss">Weight Loss</option>
          <option value="Muscle Building">Muscle Building</option>
          <option value="Balance and Coordination">
            Balance and Coordination
          </option>
          <option value="Strength">Strength</option>
        </select>
      </div>
      <div className="input-feild">
      <button type="submit" disabled={loading}
       style={{
        textDecoration: "none",
        width: "400px",
        textAlign: "center",
        background: "#7247CE",
        fontSize: "22px",
        textTransform: "none",
        color: "white",
        borderRadius: "8px",
      }}
      >
        {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Submit"
          )}

      </button>
      </div>
    </form>
  );
};

export default Input;
