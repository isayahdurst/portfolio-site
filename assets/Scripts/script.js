"use strict";

// Selects Tab elements 
const skillsTab = document.getElementById('skills-tab');
const experienceTab = document.getElementById('experience-tab');
const educationTab = document.getElementById('education-tab');

// Selects the corresponding content under each tab
const skills = document.getElementById('skills');
const experience = document.getElementById('experience');
const education = document.getElementById('education');

// Causes accent to display under "about section" tabs when clicked, and causes content to change to corresponding tab by adding or removing the css hide-tab class.
skillsTab.addEventListener('click', function () {
    skillsTab.classList.add('active-link');
    experienceTab.classList.remove('active-link');
    educationTab.classList.remove('active-link');
    skills.classList.remove('hide-tab');
    experience.classList.add('hide-tab');
    education.classList.add('hide-tab');
    console.log(skills, experience, education);
});

experienceTab.addEventListener('click', function () {
    skillsTab.classList.remove('active-link');
    experienceTab.classList.add('active-link');
    educationTab.classList.remove('active-link');
    skills.classList.add('hide-tab');
    experience.classList.remove('hide-tab');
    education.classList.add('hide-tab');
    console.log(skills, experience, education);
});

educationTab.addEventListener('click', function () {
    skillsTab.classList.remove('active-link');
    experienceTab.classList.remove('active-link');
    educationTab.classList.add('active-link');
    skills.classList.add('hide-tab');
    experience.classList.add('hide-tab');
    education.classList.remove('hide-tab');
    console.log(skills, experience, education);
});

const portfolioItem = document.querySelectorAll('.work');
console.log(portfolioItem);





