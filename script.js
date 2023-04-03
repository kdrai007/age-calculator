window.onload = function () {
  //inputs
  const day = document.querySelector("#day");
  const month = document.querySelector("#month");
  const year = document.querySelector("#year");
  const btn = document.querySelector(".arrow-icon");

  const currentDate = new Date();
  //result

  const resultDay = document.querySelector("#day-res");
  const resultMonth = document.querySelector("#month-res");
  const resultYear = document.querySelector("#year-res");

  btn.addEventListener("click", () => {
    //21 03 1999
    //03 04 2023
    //13 0 24
    if (!day.value && !month.value && !year.value) {
      return console.log("Please enter values");
    }
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    console.log(currentMonth + " " + month.value);
    if (currentMonth - month.value === 1) {
    }
    // debugger;
    if (month.value > currentMonth) {
    }
    resultMonth.innerText = currentMonth - month.value;
    resultYear.innerText = currentYear - year.value;
  });

  console.log(currentDate);
};
