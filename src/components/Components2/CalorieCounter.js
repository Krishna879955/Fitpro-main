import React, { useState } from "react";
import { TextField } from "@mui/material";

const foodData = [
  { name: "Apple", calories: 95 },
  { name: "Banana", calories: 105 },
  { name: "Orange", calories: 62 },
  { name: "Sandwich", calories: 250 },
  { name: "Salad", calories: 100 },
  { name: "Pizza", calories: 300 },
  { name: "momos", calories: 130 },
  { name: "chat", calories: 120 },
  { name: "Burger", calories: 500 },
  { name: "Fries", calories: 350 },
  { name: "Ice Cream", calories: 200 },
  { name: "Cake", calories: 400 },
  { name: "Milk", calories: 150 },
  { name: "Egg", calories: 70 },
  { name: "Pasta", calories: 200 },
  { name: "Rice", calories: 130 },
  { name: "Chicken Breast", calories: 165 },
  { name: "Steak", calories: 250 },
  { name: "Sushi", calories: 200 },
  { name: "Soup", calories: 120 },
  { name: "Yogurt", calories: 120 },
  { name: "Granola", calories: 120 },
  { name: "Peanut Butter", calories: 190 },
  { name: "Bread", calories: 25 },
  { name: "Panner", calories: 200 },
  { name: "omlet", calories: 75 },
  { name: "dal rice", calories: 250 },
  { name: "vadapav", calories: 125 },
  { name: "meat", calories: 300 },
  { name: "watermelon", calories: 30 },
  { name: "dabeli", calories: 70 },
  { name: "butter chicken", calories: 200 },
  { name: "butter naan", calories: 25 },
  { name: "tandori roti", calories: 200 },
  { name: "gulab jamun", calories: 120 },
];

function CalorieCounter() {
  const [calories, setCalories] = useState(0);
  const [foodName, setFoodName] = useState("");

  const handleAddFood = () => {
    const selectedFood = foodData.find(
      (food) => food.name.toLowerCase() === foodName.toLowerCase()
    );

    if (selectedFood) {
      setCalories((prevCalories) => prevCalories + selectedFood.calories);
      setFoodName("");
    } else {
      alert("Food item not found or calorie value not defined");
    }
  };

  return (
    <div>
      <h2 style={{ paddingLeft: "630px", paddingTop: "150px" }}>
        Calorie Counter
      </h2>
      <div style={{ paddingLeft: "480px", paddingTop: "30px" }}>
        <label
          htmlFor="foodName"
          style={{
            paddingRight: "10px",
            fontWeight: "700",
            fontSize: "22px",
            paddingLeft: "70px",
          }}
        >
          Food:
        </label>
        <TextField
          height="76px"
          style={{
            paddingLeft: "70px",
          }}
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "400px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          onChange={(e) => setFoodName(e.target.value)}
          value={foodName}
          type="text"
          id="foodName"
          className="email_container height"
        />
      </div>
      <button
        onClick={handleAddFood}
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
        }}
      >
        Add Food
      </button>
      <div>
        <p
          style={{
            paddingLeft: "550px",
            paddingTop: "30px",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          Total Calories: {calories}
        </p>
      </div>
    </div>
  );
}

export default CalorieCounter;
