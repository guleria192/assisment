import React, { useState } from 'react';

function BMICalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = () => {
    const heightM = height / 100; 
    const bmiValue = weight / (heightM ** 2); 
    setBMI(bmiValue.toFixed(2));

    if (gender === "M") {

    if (bmiValue < 18.5) {
      setBMICategory('Underweight');
    } else if (18.5 >= bmiValue && bmiValue <=24.9) {
      setBMICategory('Normal weight');
    } else if ( 25 >=  bmiValue && bmiValue<= 29.9) {
      setBMICategory('Overweight');
    } else {
      setBMICategory('Obese');
    }
  }

   else if (gender === "F") {

    if (bmiValue < 18.5) {
      setBMICategory('Underweight');
    } else if (18.5 >= bmiValue && bmiValue <= 24.9) {
      setBMICategory('Normal weight');
    } else if ( 25 >=  bmiValue && bmiValue<= 29.9) {
      setBMICategory('Overweight');
    } else {
      setBMICategory('Obese');
    }
  }

  
  


  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>
      <div>
        <label>Height (in inches):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Weight (in kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>BMI Category: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;