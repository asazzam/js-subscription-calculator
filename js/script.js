// Your JS code here
var subTypeElement = document.querySelector(".subscription-select");
var subDurationElement = document.querySelector(".duration-select");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = Number(1);

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for ${$total}.`;
};
