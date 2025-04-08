// I had to put the information into the JS code in order to go around CORS.
const data = {
    "introduction": [
        "Hello!",
        "My name is Bernardo and I am a Software Engineer with experience in Backend Development and Data Science!",
        "If you want to get in touch with me feel free to send me an <a href=\"mailto:jbernardobvdias@gmail.com\">email</a>!"
    ],
    "background" : [
        "As a software developer and data scientist, I specialize in creating innovative solutions that combine the power of software engineering with artificial intelligence to address real-world challenges. With over 2 years of experience, I’ve contributed to diverse projects, including seamless web API integrations and optimizing deep learning models for computer vision.",
        "Beyond my technical expertise, my international experiences have sharpened my adaptability and broadened my perspective, fueling my ability to collaborate effectively with teams from various cultural and professional backgrounds. I'm passionate about leveraging technology to make meaningful impacts while continuously expanding my knowledge in cutting-edge fields like AI and machine learning."
    ],
    "jobs": [
        {"title": "Sales Representative - Savoy Signature", "dates": "Dec 2024 - Present"},
        {"title": "Software Developer - Connecting Software", "dates": "Jan 2024 - Nov 2024"},
        {"title": "Data Scientist - Tracer", "dates": "Feb 2023 - Dec 2023"},
        {"title": "Research Intern - University of Nottingham", "dates": "Aug 2021 - Jan 2022"}
    ],
    "studies": [
        {"title": "(BE) Software Technology Engineering - VIA University College", "dates": "Aug 2019 - Jan 2023"},
        {"title": "Exchange Semester - University of Malta", "dates": "Feb 2022 - Jan 2023"}
    ],
    "skills": [
        {"title" : "Languages", "skills" : ["Python", "C#", "Go", "Java", "C", "SQL", "JavaScript", "Assembler"]},
        //{"title" : "Development", "skills" : ["Web API Integration", "RESTful APIs", "Desktop Applications", "CI/CD", "Unit Testing", "Agile"]},
        //{"title" : "AI", "skills" : ["PyTorch", "TensorFlow", "Computer Vision"]},
        //{"title" : "DevOps", "skills" : ["Docker", "AWS", "GCP", "Azure"]}
    ]
};

function loadData(data) {
    const IntroductionElement = document.getElementById("introduction");
    const BackgroundElement = document.getElementById("background");
    const JobsElement = document.getElementById("jobs");
    const StudiesElement = document.getElementById("studies");
    const SkillsElement = document.getElementById("skills")
    
    for (let i = 0; i < data.introduction.length; i++) {
        IntroductionElement.insertAdjacentHTML('beforeend', "<h1>" + data.introduction[i] + "</h1>");
    }

    for (let i = 0; i < data.background.length; i++) {
        BackgroundElement.insertAdjacentHTML('beforeend', "<p>" + data.background[i] + "</p>");
    }

    for (let i = 0; i < data.jobs.length; i++) {
        JobsElement.insertAdjacentHTML('beforeend', "<div class=\"job row\"><p class=\"jname col-md-8\">" + data.jobs[i].title + "</p><p class=\"jdates col-md-4\">" + data.jobs[i].dates + "</p></div>");
    }
    JobsElement.insertAdjacentHTML('beforeend', "<div class=\"job row col-md\"><p class=\"jname col-md\"><a href=\"assets/CV Bernardo Dias.pdf\">See my resume...</a></p></div>")
    
    for (let i = 0; i < data.studies.length; i++) {
        StudiesElement.insertAdjacentHTML('beforeend', "<div class=\"job row\"><p class=\"jname col-md-8\">" + data.studies[i].title + "</p><p class=\"jdates col-md-4\">" + data.studies[i].dates + "</p></div>");
    }

    for (let i = 0; i < data.skills.length; i++) {
        SkillsElement.insertAdjacentHTML("beforeend", "<div class=\"row\">")
        SkillsElement.insertAdjacentHTML("beforeend", "<p class=\"skill\"><b>" + data.skills[i].title + "</b></p>")
        for (let j = 0; j < data.skills[i].skills.length; j++) {
            SkillsElement.insertAdjacentHTML("beforeend", "<p class=\"skill\">" + data.skills[i].skills[j] + "</p>")
        }
        SkillsElement.insertAdjacentHTML("beforeend", "</div>")
    }

}

loadData(data)
