function loadData() {
    const JobsElement = document.getElementById("jobs");
    const StudiesElement = document.getElementById("studies");

    json = '{"jobs": [{"title": "Sales Representative - Savoy Signature", "dates": "Nov 2024 - Present"},{"title": "Software Developer - Connecting Software", "dates": "Jan 2024 - Oct 2024"},{"title": "Data Scientist - Tracer", "dates": "Feb 2023 - Dec 2023"},{"title": "Research Intern - University of Nottingham", "dates": "Aug 2021 - Jan 2022"}],"studies": [{"title": "(BE) Software Technology Engineering - VIA University College", "dates": "Aug 2019 - Jan 2023"},{"title": "Exchange Semester - University of Malta", "dates": "Feb 2022 - Jan 2023"}]}'

    data = JSON.parse(json)
    console.log(data)
    
    for (let i = 0; i < data.jobs.length; i++) {
        JobsElement.insertAdjacentHTML('beforeend', "<div class=\"job row\"><p class=\"jname col-md-8\">" + data.jobs[i].title + "</p><p class=\"jdates col-md-4\">" + data.jobs[i].dates + "</p></div>");
    }
    JobsElement.insertAdjacentHTML('beforeend', "<div class=\"job row col-md\"><p class=\"jname col-md\"><a href=\"assets/CV Bernardo Dias.pdf\">See my resume...</a></p></div>")
    for (let i = 0; i < data.studies.length; i++) {
        StudiesElement.insertAdjacentHTML('beforeend', "<div class=\"job row\"><p class=\"jname col-md-8\">" + data.studies[i].title + "</p><p class=\"jdates col-md-4\">" + data.studies[i].dates + "</p></div>");
    }
}

loadData()