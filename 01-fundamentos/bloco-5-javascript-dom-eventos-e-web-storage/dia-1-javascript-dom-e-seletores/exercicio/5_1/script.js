document.getElementsByTagName("header")[0].style.backgroundColor = 'green';

let emergencyTasks = document.querySelectorAll(".emergency-tasks div");

for (let task of emergencyTasks) {
    task.style.backgroundColor = 'pink';
}

let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks div");

for (let task of noEmergencyTasks) {
    task.style.backgroundColor = '#f1e14a';
}

let titlePurple = document.querySelectorAll(".emergency-tasks h3");

for (let title of titlePurple) {
    title.style.backgroundColor = 'purple';
}

let titleBlack = document.querySelectorAll(".no-emergency-tasks h3");

for (let title of titleBlack) {
    title.style.backgroundColor = 'black';
}

document.getElementById("footer-container").style.backgroundColor = '#052918';