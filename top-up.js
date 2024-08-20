let a = document.getElementById("one");
let b1 = document.querySelector(".b1");
let b = document.getElementById("two");
let b2 = document.querySelector(".b2");
let c = document.getElementById("three");
let b3 = document.querySelector(".b3");
let d = document.getElementById("four");
let b4 = document.querySelector(".b4");

a.addEventListener("click", () => {
  // setTimeout(()=>{
  h1.style.display = "block";
  // } , 1000)

  h2.style.display = "none";
  h3.style.display = "none";
  h4.style.display = "none";
  b1.classList.add("ad");
  b2.classList.remove("ad");
  b3.classList.remove("ad");
  b4.classList.remove("ad");
});

b.addEventListener("click", () => {
  h1.style.display = "none";
  // setTimeout(()=>{
  h2.style.display = "block";
  // } , 1000)
  h3.style.display = "none";
  h4.style.display = "none";

  b1.classList.remove("ad");
  b2.classList.add("ad");
  b3.classList.remove("ad");
  b4.classList.remove("ad");
});

c.addEventListener("click", () => {
  h1.style.display = "none";
  h2.style.display = "none";
  // setTimeout(()=>{
  h3.style.display = "block";
  h4.style.display = "none";
  //  } , 1000)

  b1.classList.remove("ad");
  b2.classList.remove("ad");
  b3.classList.add("ad");
  b4.classList.remove("ad");
});

d.addEventListener("click", () => {
  h1.style.display = "none";
  // setTimeout(()=>{
  h2.style.display = "none";
  // } , 1000)
  h3.style.display = "none";
  h4.style.display = "block";

  b1.classList.remove("ad");
  b2.classList.remove("ad");
  b3.classList.remove("ad");
  b4.classList.add("ad");
});

b.click();

// Calculation

let investedAmount = document.getElementById("invested-amount");
let returnamount = document.getElementById("return-amount");
let totalvalue = document.getElementById("total-value");
let circle = document.querySelector(".cb-circle");
// Monthly Investment
let monthlyInvestmentInput = document.getElementById(
  "monthly-investment-input"
);

let monthlyInvestmentSlider = document.getElementById(
  "monthly-investment-slider"
);

// Expected Returns
let expectedReturnsInput = document.getElementById("expected-returns-input");
let expectedReturnsSlider = document.getElementById("expected-returns-slider");

// Time Period
let timePeriodInput = document.getElementById("time-period-input");
let timePeriodSlider = document.getElementById("time-period-slider");

circle.style.background = `conic-gradient(#fec700 ${185}deg  , #dc291a 0deg)`;

let s1 = document.getElementById("span1");
let s2 = document.getElementById("span2");
let s3 = document.getElementById("span3");

let tool1 = document.getElementById("tool1");
let tool2 = document.getElementById("tool2");
let tool3 = document.getElementById("tool3");

function handleInput(event) {
  console.log("Output -========== > ", event.target.value);
  event.target.value = parseFloat(event.target.value);
}

function numberWithCommas(number) {
  return number.toLocaleString('en-IN');
}

function numberWithCommas(value) {
  // Attempt to convert the value to a number
  const number = parseFloat(value);

  // Check if the conversion was successful
  if (isNaN(number)) {
    // Handle the case where the value cannot be converted to a number
    return 'Invalid number';
  }

  return number.toLocaleString('en-IN');
}

// Event listeners
monthlyInvestmentInput.addEventListener("input", (e) => {
  if (e.target.value < 1) {
    e.target.value = 0;
  }

  if (e.target.value > 1000000) {
    e.target.value = 1000000;
  }

  if (e.target.value < 500) {
    s1.style.background = "#fae9e5";
    s1.style.color = "#eb5b3c";

    tool1.style.display = "block";

    monthlyInvestmentInput.style.background = "#fae9e5";
    monthlyInvestmentInput.style.color = "#eb5b3c";

    if (e.target.value == 0) {
      monthlyInvestmentInput.style.color = "gray";
    }
  } else {
    s1.style.background = "#ebf9f5";
    s1.style.color = "#00b386";
    tool1.style.display = "none";
    monthlyInvestmentInput.style.background = "#ebf9f5";
    monthlyInvestmentInput.style.color = "#00b386";
  }

  monthlyInvestmentSlider.value = e.target.value;

  if (e.target.value == 0) {
    monthlyInvestmentSlider.value = 0;
  }

  if (e.target.value >= 500 && e.target.value <= 100000) {
    // investedAmount.innerHTML = '₹' +  (e.target.value *12 * timePeriodInput.value)
    const invest = (e.target.value *12 * timePeriodInput.value)
    investedAmount.innerHTML = '₹' + numberWithCommas(invest);

     // totalvalue.innerHTML = '₹' +  Math.round(((((1+(expectedReturnsInput.value/1200))**(timePeriodInput.value*12))-1)/(expectedReturnsInput.value/1200))*e.target.value*(1+(expectedReturnsInput.value/1200)))
    const total = Math.round(((((1+(expectedReturnsInput.value/1200))**(timePeriodInput.value*12))-1)/(expectedReturnsInput.value/1200))*e.target.value*(1+(expectedReturnsInput.value/1200)))
    totalvalue.innerHTML = '₹' + numberWithCommas(total);

    // returnamount.innerHTML = '₹' + Math.round(((((1+(expectedReturnsInput.value/1200))**(timePeriodInput.value*12))-1)/(expectedReturnsInput.value/1200))*e.target.value*(1+(expectedReturnsInput.value/1200)) - ((e.target.value *12 * timePeriodInput.value)))
    const returnamt = Math.round(((((1+(expectedReturnsInput.value/1200))**(timePeriodInput.value*12))-1)/(expectedReturnsInput.value/1200))*e.target.value*(1+(expectedReturnsInput.value/1200)) - ((e.target.value *12 * timePeriodInput.value)))
    returnamount.innerHTML = '₹' + numberWithCommas(returnamt);
  }

  if (
    e.target.value == 0 ||
    expectedReturnsInput.value == 0 ||
    timePeriodInput.value == 0
  ) {
    investedAmount.innerHTML = "₹" + 0;
    returnamount.innerHTML = "₹" + 0;
    totalvalue.innerHTML = "₹" + 0;
  }
});

monthlyInvestmentSlider.addEventListener("input", (e) => {
  monthlyInvestmentInput.value = e.target.value;
  console.log(e.target.value);
  s1.style.background = "#ebf9f5";
  s1.style.color = "#00b386";
  tool1.style.display = "none";
  monthlyInvestmentInput.style.background = "#ebf9f5";
  monthlyInvestmentInput.style.color = "#00b386";

  // investedAmount.innerHTML = '₹' + (e.target.value * 12 * timePeriodSlider.value);
  const invest = (e.target.value * 12 * timePeriodSlider.value);
  investedAmount.innerHTML = '₹' + numberWithCommas(invest);

  // totalvalue.innerHTML = '₹' + Math.round(((((1+(expectedReturnsSlider.value/1200))**((timePeriodSlider.value*12) ))-1)/(expectedReturnsSlider.value/1200))*e.target.value*(1+((expectedReturnsSlider.value)/1200)))
  const total = Math.round(((((1+(expectedReturnsSlider.value/1200))**((timePeriodSlider.value*12) ))-1)/(expectedReturnsSlider.value/1200))*e.target.value*(1+((expectedReturnsSlider.value)/1200)))
  totalvalue.innerHTML = '₹' + numberWithCommas(total);

  // returnamount.innerHTML = '₹' + Math.round(((((1+(expectedReturnsSlider.value/1200))**((timePeriodSlider.value*12) ))-1)/(expectedReturnsSlider.value/1200))*e.target.value*(1+((expectedReturnsSlider.value)/1200)) - (e.target.value * 12 * timePeriodSlider.value))
  const returnamt = Math.round(((((1+(expectedReturnsSlider.value/1200))**((timePeriodSlider.value*12) ))-1)/(expectedReturnsSlider.value/1200))*e.target.value*(1+((expectedReturnsSlider.value)/1200)) - (e.target.value * 12 * timePeriodSlider.value))
  returnamount.innerHTML = '₹' + numberWithCommas(returnamt);

  if (
    e.target.value == 0 ||
    expectedReturnsInput.value == 0 ||
    timePeriodInput.value == 0
  ) {
    investedAmount.innerHTML = "₹" + 0;
    returnamount.innerHTML = "₹" + 0;
    totalvalue.innerHTML = "₹" + 0;
  }
});

// Expected Returns
expectedReturnsInput.addEventListener("input", (e) => {
  expectedReturnsSlider.value = e.target.value;
  console.log(e.target.value);

  if (e.target.value < 1) {
    e.target.value = 0;
  }

  if (e.target.value > 30) {
    e.target.value = 30;
  }

  if (e.target.value < 1) {
    s2.style.background = "#fae9e5";
    s2.style.color = "#eb5b3c";

    tool2.style.display = "block";

    expectedReturnsInput.style.background = "#fae9e5";
    expectedReturnsInput.style.color = "#eb5b3c";

    if (e.target.value == 0) {
      expectedReturnsInput.style.color = "gray";
    }
  } else {
    s2.style.background = "#ebf9f5";
    s2.style.color = "#00b386";
    tool2.style.display = "none";
    expectedReturnsInput.style.background = "#ebf9f5";
    expectedReturnsInput.style.color = "#00b386";
  }

  if (e.target.value == 0) {
    expectedReturnsSlider.value = 0;
  }

  if (e.target.value >= 1 && e.target.value <= 30) {
    // if(e.target.value.length >= 2){

    // e.target.value = e.target.value.slice(0)
    // }

    // totalvalue.innerHTML = '₹' + Math.round(((((1+e.target.value/1200)**((timePeriodInput.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentInput.value*((e.target.value/1200)+1))
    const total = Math.round(((((1+e.target.value/1200)**((timePeriodInput.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentInput.value*((e.target.value/1200)+1))
    totalvalue.innerHTML = '₹' + numberWithCommas(total);

    let j = Math.round(
      (((1 + e.target.value / 1200) ** (timePeriodInput.value * 12) - 1) /
        (e.target.value / 1200)) *
        monthlyInvestmentInput.value *
        (e.target.value / 1200 + 1)
    );

     // returnamount.innerHTML = '₹' + Math.round(((((1+e.target.value/1200)**((timePeriodInput.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentInput.value*((e.target.value/1200)+1) - (monthlyInvestmentInput.value * 12 * timePeriodInput.value))
    const returnamt = Math.round(((((1+e.target.value/1200)**((timePeriodInput.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentInput.value*((e.target.value/1200)+1) - (monthlyInvestmentInput.value * 12 * timePeriodInput.value))
    returnamount.innerHTML = '₹' + numberWithCommas(returnamt);

    let k = Math.round(
      (((1 + e.target.value / 1200) ** (timePeriodInput.value * 12) - 1) /
        (e.target.value / 1200)) *
        monthlyInvestmentInput.value *
        (e.target.value / 1200 + 1) -
        monthlyInvestmentInput.value * 12 * timePeriodInput.value
    );

    circle.style.background = `conic-gradient(#fec700 ${(100 - (k / j) * 100) * 3.6}deg  ,#dc291a 0deg)`;
  }

  if (monthlyInvestmentInput.value == 0 || e.target.value == 0 || timePeriodInput.value == 0) {
    investedAmount.innerHTML = '₹' + 0;
    returnamount.innerHTML = '₹' + 0;
    totalvalue.innerHTML = '₹' + 0;
  } else {
    investedAmount.innerHTML = '₹' + numberWithCommas(monthlyInvestmentInput.value * 12 * timePeriodInput.value);
  }
});

expectedReturnsSlider.addEventListener("input", (e) => {
  expectedReturnsInput.value = e.target.value;

  s2.style.background = "#ebf9f5";
  s2.style.color = "#00b386";
  tool2.style.display = "none";
  expectedReturnsInput.style.background = "#ebf9f5";
  expectedReturnsInput.style.color = "#00b386";

  // totalvalue.innerHTML = '₹' + Math.round(((((1+e.target.value/1200)**((timePeriodSlider.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentSlider.value*((e.target.value/1200)+1))
  const total = Math.round(((((1+e.target.value/1200)**((timePeriodSlider.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentSlider.value*((e.target.value/1200)+1))
  totalvalue.innerHTML = '₹' + numberWithCommas(total);

  let x = Math.round(
    (((1 + e.target.value / 1200) ** (timePeriodSlider.value * 12) - 1) /
      (e.target.value / 1200)) *
      monthlyInvestmentSlider.value *
      (e.target.value / 1200 + 1)
  );

  //  returnamount.innerHTML =  '₹' + Math.round(((((1+e.target.value/1200)**((timePeriodSlider.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentSlider.value*((e.target.value/1200)+1) - (monthlyInvestmentSlider.value * 12 * timePeriodSlider.value))
  const returnamt =  Math.round(((((1+e.target.value/1200)**((timePeriodSlider.value*12)))-1)/(e.target.value/1200))*monthlyInvestmentSlider.value*((e.target.value/1200)+1) - (monthlyInvestmentSlider.value * 12 * timePeriodSlider.value))
  returnamount.innerHTML =  '₹' + numberWithCommas(returnamt);

  let y = Math.round(
    (((1 + e.target.value / 1200) ** (timePeriodSlider.value * 12) - 1) /
      (e.target.value / 1200)) *
      monthlyInvestmentSlider.value *
      (e.target.value / 1200 + 1) -
      monthlyInvestmentSlider.value * 12 * timePeriodSlider.value
  );

  circle.style.background = `conic-gradient(#fec700 ${(100 - (y / x) * 100) * 3.6}deg  ,#dc291a 0deg)`;

   if (monthlyInvestmentInput.value == 0 || e.target.value == 0 || timePeriodInput.value == 0) {
    investedAmount.innerHTML = '₹' + 0;
    returnamount.innerHTML = '₹' + 0;
    totalvalue.innerHTML = '₹' + 0;
  } else {
    investedAmount.innerHTML = '₹' + numberWithCommas(monthlyInvestmentInput.value * 12 * timePeriodInput.value);
  }
});

// Time Period
timePeriodInput.addEventListener("input", (e) => {
  timePeriodSlider.value = e.target.value;

  if (e.target.value < 1) {
    e.target.value = 0;
  }

  if (e.target.value > 40) {
    e.target.value = 40;
  }

  if (e.target.value < 1) {
    s3.style.background = "#fae9e5";
    s3.style.color = "#eb5b3c";

    tool3.style.display = "block";

    timePeriodInput.style.background = "#fae9e5";
    timePeriodInput.style.color = "#eb5b3c";

    if (e.target.value == 0) {
      timePeriodInput.style.color = "gray";
    }
  } else {
    s3.style.background = "#ebf9f5";
    s3.style.color = "#00b386";
    tool3.style.display = "none";
    timePeriodInput.style.background = "#ebf9f5";
    timePeriodInput.style.color = "#00b386";
  }

  if (e.target.value == 0) {
    timePeriodSlider.value = 0;
  }

  if (e.target.value >= 1 && e.target.value <= 40) {
    // investedAmount.innerHTML = '₹' + (monthlyInvestmentSlider.value * 12 * timePeriodInput.value);
    const invest = (monthlyInvestmentSlider.value * 12 * timePeriodInput.value);
    investedAmount.innerHTML = '₹' + numberWithCommas(invest);

    // totalvalue.innerHTML = '₹' + Math.round(((((1+(expectedReturnsInput.value/1200))**(e.target.value*12))-1)/(expectedReturnsInput.value/1200))*(1+(expectedReturnsInput.value/1200))* monthlyInvestmentInput.value)
    const total = Math.round(((((1+(expectedReturnsInput.value/1200))**(e.target.value*12))-1)/(expectedReturnsInput.value/1200))*(1+(expectedReturnsInput.value/1200))* monthlyInvestmentInput.value)
    totalvalue.innerHTML = '₹' + numberWithCommas(total)

    let g = Math.round(
      (((1 + expectedReturnsInput.value / 1200) ** (e.target.value * 12) - 1) /
        (expectedReturnsInput.value / 1200)) *
        (1 + expectedReturnsInput.value / 1200) *
        monthlyInvestmentInput.value
    );

    // returnamount.innerHTML =  '₹' + Math.round(((((1+(expectedReturnsInput.value/1200))**(e.target.value*12))-1)/(expectedReturnsInput.value/1200))*(1+(expectedReturnsInput.value/1200))* monthlyInvestmentInput.value - ((monthlyInvestmentInput.value * 12 * e.target.value)))
    const returnamt = Math.round(((((1+(expectedReturnsInput.value/1200))**(e.target.value*12))-1)/(expectedReturnsInput.value/1200))*(1+(expectedReturnsInput.value/1200))* monthlyInvestmentInput.value - ((monthlyInvestmentInput.value * 12 * e.target.value)))
    returnamount.innerHTML =  '₹' + numberWithCommas(returnamt);

    let h = Math.round(
      (((1 + expectedReturnsInput.value / 1200) ** (e.target.value * 12) - 1) /
        (expectedReturnsInput.value / 1200)) *
        (1 + expectedReturnsInput.value / 1200) *
        monthlyInvestmentInput.value -
        monthlyInvestmentInput.value * 12 * e.target.value
    );

    circle.style.background = `conic-gradient(#fec700 ${
      (100 - (h / g) * 100) * 3.6
    }deg  ,#dc291a 0deg)`;
  }

  if (
    monthlyInvestmentInput.value == 0 ||
    expectedReturnsInput.value == 0 ||
    e.target.value == 0
  ) {
    investedAmount.innerHTML = "₹" + 0;
    returnamount.innerHTML = "₹" + 0;
    totalvalue.innerHTML = "₹" + 0;
  }
});

timePeriodSlider.addEventListener("input", (e) => {
  timePeriodInput.value = e.target.value;

  s3.style.background = "#ebf9f5";
  s3.style.color = "#00b386";
  tool3.style.display = "none";
  timePeriodInput.style.background = "#ebf9f5";
  timePeriodInput.style.color = "#00b386";

  // investedAmount.innerHTML = '₹' + (e.target.value * 12 * monthlyInvestmentSlider.value);
  const invest = (e.target.value * 12 * monthlyInvestmentSlider.value);
  investedAmount.innerHTML = '₹' + numberWithCommas(invest);

  // totalvalue.innerHTML =  '₹' + Math.round(((((1+(expectedReturnsSlider.value/1200))**(e.target.value*12))-1)/(expectedReturnsSlider.value/1200))*(1+(expectedReturnsSlider.value/1200))* monthlyInvestmentSlider.value)
  const total = Math.round(((((1+(expectedReturnsSlider.value/1200))**(e.target.value*12))-1)/(expectedReturnsSlider.value/1200))*(1+(expectedReturnsSlider.value/1200))* monthlyInvestmentSlider.value)
  totalvalue.innerHTML =  '₹' + numberWithCommas(total);


  let t = Math.round(
    (((1 + expectedReturnsSlider.value / 1200) ** (e.target.value * 12) - 1) /
      (expectedReturnsSlider.value / 1200)) *
      (1 + expectedReturnsSlider.value / 1200) *
      monthlyInvestmentSlider.value
  );

  // returnamount.innerHTML =  '₹' +  Math.round(((((1+(expectedReturnsSlider.value/1200))**(e.target.value*12))-1)/(expectedReturnsSlider.value/1200))*(1+(expectedReturnsSlider.value/1200))* monthlyInvestmentSlider.value  - ((monthlyInvestmentSlider.value * 12 * e.target.value)))
  const returnamt = Math.round(((((1+(expectedReturnsSlider.value/1200))**(e.target.value*12))-1)/(expectedReturnsSlider.value/1200))*(1+(expectedReturnsSlider.value/1200))* monthlyInvestmentSlider.value  - ((monthlyInvestmentSlider.value * 12 * e.target.value)))
  returnamount.innerHTML =  '₹' + numberWithCommas(returnamt);

  let u = Math.round(
    (((1 + expectedReturnsSlider.value / 1200) ** (e.target.value * 12) - 1) /
      (expectedReturnsSlider.value / 1200)) *
      (1 + expectedReturnsSlider.value / 1200) *
      monthlyInvestmentSlider.value -
      monthlyInvestmentSlider.value * 12 * e.target.value
  );

  circle.style.background = `conic-gradient(#fec700 ${
    (100 - (u / t) * 100) * 3.6
  }deg  ,#dc291a 0deg)`;

  if (
    monthlyInvestmentInput.value == 0 ||
    expectedReturnsInput.value == 0 ||
    e.target.value == 0
  ) {
    investedAmount.innerHTML = "₹" + 0;
    returnamount.innerHTML = "₹" + 0;
    totalvalue.innerHTML = "₹" + 0;
  }
});

// Slidebar Calculation

let monthlyinput = document.getElementById("monthly-investment-input");
let monthlyslider = document.getElementById("monthly-investment-slider");

let returninput = document.getElementById("expected-returns-input");
let returnslider = document.getElementById("expected-returns-slider");

let yearinput = document.getElementById("time-period-input");
let yearslider = document.getElementById("time-period-slider");

function slider() {
  valpercent = (monthlyslider.value / monthlyslider.max) * 100;
  monthlyslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% ,  #ecedef ${valpercent}%)`;

  monthlyinput.addEventListener("input", (e) => {
    valpercent = (e.target.value / monthlyinput.max) * 100;
    monthlyslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% ,  #ecedef ${valpercent}%)`;
  });

  monthlyslider.addEventListener("input", (e) => {
    valpercent = (e.target.value / monthlyslider.max) * 100;
    monthlyslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% ,  #ecedef ${valpercent}%)`;
  });

  valpercent = (returnslider.value / returnslider.max) * 100;
  returnslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`;

  returninput.addEventListener("input", (e) => {
    valpercent = (e.target.value / returninput.max) * 100;
    returnslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`;
  });

  returnslider.addEventListener("input", (e) => {
    valpercent = (e.target.value / returnslider.max) * 100;
    returnslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`;
  });

  valpercent = (yearslider.value / yearslider.max) * 100;
  yearslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`;

  yearinput.addEventListener("input", (e) => {
    valpercent = (e.target.value / yearinput.max) * 100;
    yearslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`;
  });

  yearslider.addEventListener("input", (e) => {
    valpercent = (e.target.value / yearslider.max) * 100;
    yearslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`;
  });
}

slider();
