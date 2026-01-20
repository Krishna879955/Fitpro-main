import React, { useState } from "react";
import "./bmicalculator.css";
import { TextField } from "@mui/material";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [classification, setClassification] = useState("");

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInF = parseFloat(height) * 0.3048;

    if (!isNaN(weightInKg) && !isNaN(heightInF) && heightInF > 0) {
      const bmiValue = weightInKg / (heightInF * heightInF);
      setBMI(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setClassification("Underweight");
      } else if (bmiValue < 24.9) {
        setClassification("Normal weight");
      } else if (bmiValue < 29.9) {
        setClassification("Overweight");
      } else {
        setClassification("Obese");
      }
    } else {
      setBMI(null);
      setClassification("");
    }
  };

  return (
    <div>
      <div className="bmicalculator">
        <h1>
          <span className="stroke-text">BMI-</span>Calculator
        </h1>
        <div>
          <TextField
            height="76px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "400px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter Your Weight(kg)..."
            type="number"
            className="email_container  weight"
          />
        </div>
        <div> 
          <TextField
            height="76px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "400px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter Your Height(feet)..."
            type="number"
            className="email_container height"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="btn btn-bmi"
          style={{
            textDecoration: "none",
            width: "400px",
            textAlign: "center",
            background: "#7247CE",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "8px",
            marginLeft: "500px",
          }}
        >
          Calculate BMI
        </button>
        {bmi !== null && (
          <div>
            <h2 className=" ans">Your BMI is: {bmi}</h2>
            <h2 className=" ans">Classification: {classification}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
