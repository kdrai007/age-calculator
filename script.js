window.onload = function () {
  //inputs
  const day = document.querySelector(".day");
  const month = document.querySelector(".month");
  const year = document.querySelector(".year");
  const btn = document.querySelector(".arrow-icon");
  //input classes for error warning
  const dayWarning = document.querySelector(".day-error");
  const monthWarning = document.querySelector(".month-error");
  const yearWarning = document.querySelector(".year-error");
  //label classes for error warning
  const dayLabel = document.querySelector(".day-label");
  const monthLabel = document.querySelector(".month-label");
  const yearLabel = document.querySelector(".year-label");
  const date = new Date();
  let currentDay = date.getDate();
  let currentMonth = 1 + date.getMonth();
  let currentYear = date.getFullYear();
  //result

  const resultDay = document.querySelector("#day-res");
  const resultMonth = document.querySelector("#month-res");
  const resultYear = document.querySelector("#year-res");
  const daysInMonth = [
    31, // January
    28, // February
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
  ];

  // btn.addEventListener("click", () => {
  //   //21 03 1999
  //   //03 04 2023
  //   //13 0 24
  //   let birthDay = parseInt(day.value);
  //   let birthMonth = parseInt(month.value);
  //   let birthYear = parseInt(year.value);
  //   if (isNaN(birthDay) && isNaN(birthMonth) && isNaN(birthYear))
  //     return console.log("Please Enter valid input");
  //   // debugger;
  //   let currentDay = currentDate.getDate();
  //   let currentMonth = currentDate.getMonth() + 1;
  //   let currentYear = currentDate.getFullYear();
  //   debugger;
  //   if (birthMonth > currentMonth) {
  //     if (currentDay < birthDay) {
  //       resultMonth.innerText = 12 - (birthMonth - currentMonth) - 1;
  //       resultDay.innerText = 30 - (birthDay - currentDay);
  //       // console.log(resultDay);
  //     } else {
  //       resultMonth.innerText = 12 - (birthMonth - currentMonth);
  //       resultDay.innerText = currentDay - birthDay;
  //     }
  //     resultYear.innerText = currentYear - birthYear - 1;
  //   } else if (birthMonth < currentMonth) {
  //     if (currentDay < birthDay) {
  //       resultMonth.innerText = currentMonth - birthMonth - 1;
  //       resultDay.innerText = 30 + currentDay - birthDay;
  //     } else {
  //       if (currentDay === birthDay) {
  //         resultDay.innerText = 0;
  //       }
  //       resultMonth.innerText = currentMonth - birthMonth;
  //       resultDay.innerText = currentDay - birthDay;
  //     }
  //     resultYear.innerText = currentYear - birthYear;
  //   } else if (birthMonth === currentMonth) {
  //     if (currentDay > birthDay) {
  //       resultDay.innerText = currentDay - birthDay;
  //       resultYear.innerText = currentYear - birthYear;
  //       resultMonth.innerText = 0;
  //     } else if (currentDay === birthDay) {
  //       resultMonth.innerText = 0;
  //       resultDay.innerText = 0;
  //       resultYear.innerText = currentYear - birthYear;
  //     } else {
  //       resultDay.innerText = 30 - (birthDay - currentDay);
  //       resultMonth.innerText = 11;
  //       resultYear.innerText = currentYear - birthYear - 1;
  //     }
  //   }
  // });
  //After refectoring the code
  btn.addEventListener("click", formatDate);

  function validate() {
    const validateInput = (
      inputValue,
      maxValue,
      label,
      warning,
      inputField
    ) => {
      let inputFlag = false;
      if (!inputValue || parseInt(inputValue) > maxValue) {
        label.classList.add("label-error");
        warning.classList.remove("hide");
        inputField.classList.add("input-error");
        inputFlag = false;
      } else {
        label.classList.remove("label-error");
        warning.classList.add("hide");
        inputField.classList.remove("input-error");
        inputFlag = true;
      }
      return inputFlag;
    };

    const dayFlag = validateInput(day.value, 31, dayLabel, dayWarning, day);
    const monthFlag = validateInput(
      month.value,
      12,
      monthLabel,
      monthWarning,
      month
    );
    const yearFlag = validateInput(
      year.value,
      currentYear,
      yearLabel,
      yearWarning,
      year
    );

    return dayFlag && monthFlag && yearFlag;
  }
  function formatDate() {
    if (validate()) {
      var getDay, getMonth, getYear;
      if (day.value > currentDay) {
        currentDay = currentDay + daysInMonth[currentMonth - 1];
        currentMonth = currentMonth - 1;
      }
      if (month.value > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
      }
      getDay = currentDay - day.value;
      getMonth = currentMonth - month.value;
      getYear = currentYear - year.value;

      resultDay.innerText = getDay.toString();
      resultMonth.innerText = getMonth.toString();
      resultYear.innerText = getYear.toString();
      resultDay.style.letterSpacing = "0";
      resultMonth.style.letterSpacing = "0";
      resultYear.style.letterSpacing = "0";
    }
  }
};
