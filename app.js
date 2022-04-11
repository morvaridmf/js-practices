const calculate = document.getElementById("calculate");

calculate.addEventListener("click", () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  let bmiValue;
  if (!height && !weight) {
    alert("insert height and weight");
  } else {
    bmiValue = (weight / height ** 2) * 10000;
    if (bmiValue >= 16 && bmiValue < 18.5) {
      document.write(bmiValue + "= Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      document.write(bmiValue + "= Normal");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      document.write(bmiValue + "= Overweight");
    } else if (bmiValue >= 30 && bmiValue < 45) {
      document.write(bmiValue + "= Obesity");
    }
  }
});
