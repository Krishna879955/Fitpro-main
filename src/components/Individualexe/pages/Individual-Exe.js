import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../Exercises";
import SearchExercises from "../SearchExercises";

const Individualexe = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Individualexe;