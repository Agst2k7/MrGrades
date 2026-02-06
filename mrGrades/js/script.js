import { values } from "./config.js";

const period_input = document.getElementById("period_value_input");
const grade_input = document.getElementById("grade_input");
const addGrade_btn = document.getElementById("add_grade_btn");
const calc_btn = document.getElementById("calc_btn");
const HTMLlist = document.getElementById("grades_list_front");

console.log("script successfully loaded!")


let grades = [];
let less_than_6 = 0;
let average_6 = 0;
let average_7 = 0;
let average_8 = 0;
let average_9 = 0;
let average_10 = 0;

function reset() {
    let grades = [];
    let less_than_6 = 0;
    let average_6 = 0;
    let average_7 = 0;
    let average_8 = 0;
    let average_9 = 0;
    let average_10 = 0; 
}

function addGrade() {
    console.log("add grade...")
    const grade_value = Number(grade_input.value);

    if (grade_input.value === "" || isNaN(grade_value)) {return}; 

    grades.push(grade_value);

    const li = document.createElement("li");
    li.textContent = grade_value;
    HTMLlist.appendChild(li);

    grade_input.value = "";
    grade_input.focus();
};

function getPeriodValue() {
    let value = Number(period_input.value);
    return value;
}

function valuateGrade(grade) {
    
    if (grade <= 3) {return values["<= 3"]}
    else if (grade < 5) {return values["4"]}
    else if (grade < 6) {return values["5"]}
    else if (grade < 7) {return values["6"]}
    else if (grade < 8) {return values["7"]}
    else if (grade < 9) {return values["8"]}
    else if (grade >= 9) {return values[">= 9"]}
};


function calculateResult() {
    const total_period_value = getPeriodValue()*grades.length;
    
    reset();
    
    let grades_sum = 0;
    let money_value = 0;
    for (let i=0; i<grades.length; i++) {
        averageCount(grades[i])
        grades_sum += grades[i];
        money_value += valuateGrade(grades[i])
    }
    const grades_mean = (grades_sum/grades.length);
    const grades_mean_10 = (10*grades_sum)/total_period_value;
    
    return {
        "grades_mean": grades_mean,
        "grades_mean_10": grades_mean_10,
        "money_value": money_value,
        "less_than_6": less_than_6,
        "average_6": average_6,
        "average_7": average_7,
        "average_8": average_8,
        "average_9": average_9,
        "average_10": average_10,
    }
}

function averageCount(g) {
    const grade = (Number(g)*10)/getPeriodValue();
    if (grade < 6) {less_than_6 ++}
    else if (grade < 7) {average_6 ++}
    else if (grade < 8) {average_7 ++}
    else if (grade < 9) {average_8 ++}
    else if (grade < 10) {average_9 ++}
    else if (grade == 10) {average_10 ++}
}
function goToResult() {
    const query = new URLSearchParams(calculateResult()).toString();
    window.location.href = "./pages/result.html?" + query;
}

// add grade btn / ENTER

addGrade_btn.addEventListener("click", addGrade);
grade_input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addGrade();
    }
});

// Calc results btn
calc_btn.addEventListener("click", goToResult)


