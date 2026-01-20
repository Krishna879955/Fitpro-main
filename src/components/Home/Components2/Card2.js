import React from 'react';

const Card2 = () => {
  return (
    <div style={containerStyle}>
      <h1 style={{marginRight:"500px" , fontSize:"50px" , marginBottom:"50px"}}>Features</h1>
      <div style={rowStyle}>
        <div style={sideBySideCardStyle}>
          <h2 style={{ color: '#7247CE' , textAlign:"center"}}>Workout Plan</h2>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Plan and schedule personalized workout routines based on your goals, fitness level, and available time. The workout planner helps users stay organized and consistent with their exercise regimen.</p>
          <button style={{textAlign:"center",color:"#7247CE",fontSize:"20px", marginLeft:"50px"}}>More</button>
        </div>
        <div style={sideBySideCardStyle}>
          <h2 style={{ color: '#7247CE', textAlign:"center" }}>Individual Exercises</h2>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Access a comprehensive library of exercises with detailed instructions and videos. Users can explore various workouts, target different muscle groups, and find exercises suitable for their fitness level and preferences.</p>
          <button style={{textAlign:"center",color:"#7247CE",fontSize:"20px", marginLeft:"50px"}}>More</button>
        </div>
        <div style={sideBySideCardStyle}>
          <h2 style={{ color: '#7247CE' ,textAlign:"center"}}>Diet Plan</h2>
          <p style={{ fontSize: '14px',textAlign:"center",marginTop:"30px" }}>Create customized meal plans tailored to your dietary preferences, goals, and nutritional needs. The diet planner helps users design balanced and sustainable eating habits to support their fitness goals.</p>
          <button style={{textAlign:"center",color:"#7247CE",fontSize:"20px", marginLeft:"50px"}}>More</button>
        </div>
        <div style={sideBySideCardStyle}>
          <h2 style={{ color: '#7247CE', textAlign:"center" }}>Bmi Calculator</h2>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Determine your Body Mass Index (BMI) to assess your overall health based on your weight and height. This tool helps users understand their current health status and set appropriate goals.</p>
          <button style={{textAlign:"center",color:"#7247CE",fontSize:"20px", marginLeft:"50px"}}>More</button>
        </div>
        <div style={sideBySideCardStyle}>
          <h2 style={{ color: '#7247CE', textAlign:"center" }}>Calorie Counter</h2>
          <p style={{ fontSize: '14px',textAlign:"center" }}>Track your daily calorie intake to manage weight and maintain a balanced diet. The calorie counter allows users to monitor their food consumption and make informed decisions about their nutrition.</p>
          <button style={{textAlign:"center",color:"#7247CE",fontSize:"20px", marginLeft:"50px"}}>More</button>
        </div>
      </div>

      
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',

};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '20px',
};

const sideBySideCardStyle = {
  width: '200px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const columnStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)', // 1 column
  gap: '20px',
};

const verticalCardStyle = {
  width: '200px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default Card2;