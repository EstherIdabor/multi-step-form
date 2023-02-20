const form = document.querySelector(".form");
const fname = document.querySelector("#fname");
const email = document.querySelector("#email");
const pNumber = document.querySelector("#Pnumber");

const stepOne = document.getElementById("first-step");
const stepTwo = document.getElementById("second-step");
const stepThree = document.getElementById("third-step");
const stepFour = document.getElementById("fourth-step");
const finalStep = document.getElementById("final-step");
let formControls = document.querySelectorAll(".form-control");

const slider = document.querySelector(".slider");
const plans = document.querySelectorAll(".plan");
const availablePlan = document.querySelector(".available-plans");
const calenderChoice = document.querySelectorAll(".choice");

const addsOnMonth = document.querySelectorAll(".adds-on-month");
const addsOnYear = document.querySelectorAll(".adds-on-year");

const secondButton = document.querySelector(".button-2");
const thirdButton = document.querySelector(".button-3");
const fourthButton = document.querySelector(".button-4");

const firstBackCall = document.querySelector(".back-2");
const secondBackCall = document.querySelector(".back-3");
const thirdBackCall = document.querySelector(".back-4");

const checkBox = document.querySelectorAll(".regular-checkbox");

const firstDigit = document.querySelector(".digits[data-step = '1']");
const secondDigit = document.querySelector(".digits[data-step = '2']");
const thirdDigit = document.querySelector(".digits[data-step = '3']");
const fourthDigit = document.querySelector(".digits[data-step = '4']");

firstDigit.classList.add("active_digit");

const displayPage = function (step1, step2) {
  step1.classList.add("hidden");
  step2.classList.remove("hidden");
};

// FORM VALIDATION/ STEP ONE
// Convert form-control to an array from a nodelist
formControls = Array.from(formControls);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();

  // Ensure the submit/next step button does not work if there are errors
  const errorCheck = formControls.some((formControl) =>
    formControl.classList.contains("error")
  );
  if (!errorCheck) {
    // if errors does not exit i.e the user has entered their details we hide the current step and move to the next step
    displayPage(stepOne, stepTwo);

    // and remove the active-digit class from the digit corresponding to the current page and add to the digit corresponding to the page the button is taking the user to
    firstDigit.classList.remove("active_digit");
    if (!stepTwo.classList.contains("hidden"))
      secondDigit.classList.add("active_digit");
  }
});

function validateEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function checkInput() {
  const fnameValue = fname.value.trim();
  const emailValue = email.value.trim();
  const pNumberValue = pNumber.value.trim();

  if (fnameValue === "") {
    displayErrorMessage(fname, "This field is required");
  } else {
    hideErrorMessage(fname);
  }

  if (emailValue === "") {
    displayErrorMessage(email, "This field is required");
  } else if (validateEmail(emailValue) === false) {
    displayErrorMessage(email, "Enter a valid email");
  } else {
    hideErrorMessage(email);
  }

  if (pNumberValue === "") {
    displayErrorMessage(pNumber, "This field is required");
  } else {
    hideErrorMessage(pNumber);
  }
}

function displayErrorMessage(input, message) {
  const formControlDiv = input.parentElement;
  formControlDiv.classList = "form-control error";
  const errorMessage = formControlDiv.querySelector("small");
  errorMessage.textContent = message;
}

function hideErrorMessage(input) {
  const formControlDiv = input.parentElement;
  formControlDiv.classList = "form-control";
}

////////////////////////////////////////////////////////
let month = true;

let activeTab = document.querySelector(".plan[tabindex='1']");
availablePlan.addEventListener("click", function (e) {
  if (e.target.closest(".plan")) {
    activeTab = e.target.closest(".plan");
  }
});

// STEP TWO
slider.addEventListener("click", function (e) {
  e.preventDefault();
  slider.classList.toggle("year");
  slider
    .closest(".monthly-yearly")
    .firstElementChild.classList.toggle("blur-text");
  slider
    .closest(".monthly-yearly")
    .lastElementChild.classList.toggle("blur-text");

  if (slider.classList.contains("year")) {
    month = false;
    calenderChoice.forEach((plan) => {
      if (plan.lastElementChild.textContent == "$9/mo") {
        plan.lastElementChild.textContent = "$90/yr";
        plan.insertAdjacentHTML(
          "beforeend",
          "<h3 class='margin-top'>2 months free</h3>"
        );
      } else if (plan.lastElementChild.textContent == "$12/mo") {
        plan.lastElementChild.textContent = "$120/yr";
        plan.insertAdjacentHTML(
          "beforeend",
          "<h3 class='margin-top'>2 months free</h3>"
        );
      } else {
        plan.lastElementChild.textContent = "$150/yr";
        plan.insertAdjacentHTML(
          "beforeend",
          "<h3 class='margin-top'>2 months free</h3>"
        );
      }
    });
  } else {
    month = true;
    calenderChoice.forEach((plan) => {
      if (plan.querySelector(".month").textContent == "$90/yr") {
        plan.querySelector(".month").textContent = "$9/mo";
        plan.lastElementChild.remove();
      } else if (plan.querySelector(".month").textContent == "$120/yr") {
        plan.querySelector(".month").textContent = "$12/mo";
        plan.lastElementChild.remove();
      } else if (plan.querySelector(".month").textContent == "$150/yr") {
        plan.querySelector(".month").textContent = "$15/mo";
        plan.lastElementChild.remove();
      }
    });
  }
});

secondButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (slider.classList.contains("year")) {
    addsOnYear.forEach((addOn) => {
      addOn.classList.remove("hidden");
    });
    addsOnMonth.forEach((tab) => {
      tab.classList.add("hidden");
    });
  } else if (!slider.classList.contains("year")) {
    addsOnYear.forEach((tab) => {
      tab.classList.add("hidden");
    });
    addsOnMonth.forEach((tab) => {
      tab.classList.remove("hidden");
    });
  }

  displayPage(stepTwo, stepThree);

  secondDigit.classList.remove("active_digit");
  if (!stepThree.classList.contains("hidden"))
    thirdDigit.classList.add("active_digit");
});

firstBackCall.addEventListener("click", function () {
  displayPage(stepTwo, stepOne);

  secondDigit.classList.remove("active_digit");
  if (!stepOne.classList.contains("hidden"))
    firstDigit.classList.add("active_digit");
});

////////////////////////////////////////////////////////////////////
const dynamicContainer1 = document.querySelector(".dynamic-div__1");
const dynamicContainer2 = document.querySelector(".dynamic-div__2");
const totalValue = document.querySelector(".dynamic-div__total");

//STEP THREE
thirdButton.addEventListener("click", function (e) {
  e.preventDefault();
  const perDate = month ? "per month" : "per year";
  const interval = month ? "Monthly" : "Yearly";

  let activeTabName = activeTab.querySelector("h3").textContent;
  let activeTabValue = activeTab.querySelector("p").textContent;

  dynamicContainer1.insertAdjacentHTML(
    "afterbegin",
    `<div class="flex">
  <h3 class="margin-top text-weight-700">${activeTabName}(${interval})</h3>
  <p class="margin-top month">${activeTabValue}</p>
 </div>`
  );

  const checkedOptions = [];

  checkBox.forEach((box) => {
    if (box.checked) {
      checkedOptions.push(box.parentElement);
    }
  });
  let total = 0;

  checkedOptions.forEach((option) => {
    const optionName = option.querySelector("h3").textContent;
    const optionValue = month
      ? option.querySelector(".adds-on-month").textContent
      : option.querySelector(".adds-on-year").textContent;

    dynamicContainer2.insertAdjacentHTML(
      "beforeend",
      `<div class="flex">
    <h3 class="blur-text">${optionName}</h3>
    <p >${optionValue}</p>
  </div>`
    );
    const shallowCopy = optionValue.slice(2);
    total += parseInt(shallowCopy);
  });
  const shallowCopy = activeTabValue.slice(1);
  total += parseInt(shallowCopy);

  let unit = month ? "mo" : "yr";

  totalValue.insertAdjacentHTML(
    "beforeend",
    `<p class="blur-text">Total (${perDate})</p>
  <strong>$${total}/${unit}</strong>`
  );

  displayPage(stepThree, stepFour);

  thirdDigit.classList.remove("active_digit");
  if (!stepFour.classList.contains("hidden"))
    fourthDigit.classList.add("active_digit");
});

secondBackCall.addEventListener("click", function () {
  displayPage(stepThree, stepTwo);

  thirdDigit.classList.remove("active_digit");
  if (!stepTwo.classList.contains("hidden"))
    secondDigit.classList.add("active_digit");
});

//////////////////////////////////////////////
const changePlan = document.querySelector(".change__link");

const removeDynamicContainer = function () {
  const removeOptions = dynamicContainer2.querySelectorAll("div");
  dynamicContainer1.firstElementChild.remove();
  removeOptions.forEach((option) => {
    option.remove();
  });
  const totalValueRemoved = Array.from(totalValue.childNodes);
  totalValueRemoved.forEach((option) => option.remove());
};
// STEP FOUR

thirdBackCall.addEventListener("click", function () {
  removeDynamicContainer();
  displayPage(stepFour, stepThree);

  fourthDigit.classList.remove("active_digit");
  if (!stepThree.classList.contains("hidden"))
    thirdDigit.classList.add("active_digit");
});
changePlan.addEventListener("click", function (e) {
  removeDynamicContainer();
  displayPage(stepFour, stepTwo);

  fourthDigit.classList.remove("active_digit");
  if (!stepTwo.classList.contains("hidden"))
    secondDigit.classList.add("active_digit");
});

fourthButton.addEventListener("click", function (e) {
  e.preventDefault();
  displayPage(stepFour, finalStep);
});
