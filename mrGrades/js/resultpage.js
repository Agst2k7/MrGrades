console.log("Script successfully loaded!")

const params = new URLSearchParams(window.location.search);

const grades_mean = params.get("grades_mean");
const grades_mean_10 = Number(params.get("grades_mean_10"));
const money_value = params.get("money_value");
const less_than_6 = params.get("less_than_6");
const average_6 = params.get("average_6");
const average_7 = params.get("average_7");
const average_8 = params.get("average_8");
const average_9 = params.get("average_9");
const average_10 = params.get("average_10");

console.log(average_10, average_9, average_8, average_7, average_6, less_than_6)

document.getElementById("grades_mean").textContent = grades_mean;
document.getElementById("grades_mean_10").textContent = grades_mean_10.toFixed(2);

document.getElementById("money_value").textContent = money_value;
if (Number(money_value) > 0) {document.getElementById("money_value").style.color="rgb(9, 78, 25)"}
else {document.getElementById("money_value").style.color="rgb(129, 9, 9)"}

document.getElementById("less_than_6").textContent = less_than_6;
document.getElementById("average_6").textContent = average_6;
document.getElementById("average_7").textContent = average_7;
document.getElementById("average_8").textContent = average_8;
document.getElementById("average_9").textContent = average_9;
document.getElementById("average_10").textContent = average_10;


