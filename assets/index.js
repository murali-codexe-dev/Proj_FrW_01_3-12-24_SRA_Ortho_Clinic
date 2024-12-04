$(document).ready(function () {
    $('#menu').on('click', function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});

async function fetchData(type = "Services") {
    let response
    type === "Services" ? response = await fetch("./assets/data/services.json")
    :
    response = await fetch("./assets/data/portfolio.json");
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    const skillsContainer1 = document.getElementById("work1");
    if (!skillsContainer1) {
        console.error("Element with ID 'work1' not found.");
        return;
    }
    let skillHTML = "";
    skills.forEach(skill => {
        if (skill.rows === "row1") {
            skillHTML += `
                <div class="bar">
                    <div class="info">
                        <img src="${skill.icon}" alt="${skill.heading}" />
                        <h2>${skill.heading}</h2>
                        <span>${skill.description}</span>
                    </div>
                </div>`;
        }
    });
    skillsContainer1.innerHTML = skillHTML;

    let skillsContainer2 = document.getElementById("work2");
    if (!skillsContainer2) {
        console.error("Element with ID 'work2' not found.");
        return;
    }
    skillHTML = "";
    skills.forEach(skill => {
        if(skill.rows === "row2")
            skillHTML += `
            <div class="bar">
                  <div class="info">
                        <img src="${skill.icon}" alt="${skill.heading}" />
                        <h2>${skill.heading}</h2>
                        <span>${skill.description}</span>
                  </div>
            </div>`
    });
    skillsContainer2.innerHTML = skillHTML;
}

function showSkills2(skills) {
    const skillsContainer3 = document.getElementById("portfolio1");
    if (!skillsContainer3) {
        console.error("Element with ID 'portfolio1' not found.");
        return;
    }
    skillHTML = "";
    skills.forEach(skill => {
        // if (skill.rows === "row1") {
            skillHTML += `
                <div class="bar">
                    <div class="info">
                        <img src="${skill.icon}" alt="" />
                    </div>
                </div>`;
        // }
    });
    skillsContainer3.innerHTML = skillHTML;
}

fetchData("Services").then(data => {
    showSkills(data);
});

fetchData("Portfolio").then(data => {
    showSkills2(data);
});

const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.services .container', { interval: 200 });
srtop.reveal('.services .container .bar', { delay: 400 });