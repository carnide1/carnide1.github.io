const projects = [
    {
        title: 'Heartsync',
        description: 'A wearable vital sign detection system with a connected website.',
        tools: ['HTML', 'CSS', 'JavaScript'],
        text: 'Programmed an interactive website to continuously accept and display data from an ESP32 board',
        date: '2024-20-01',
        image: '/assets/img/heartsync.png',
        githubLink: 'https://github.com/Aryan-G4/HeartSynch---IoT-Biometric-Sensor',
    }, {
        title: 'WayNav Pro',
        description: 'Large-scale interactive mapping software',
        tools: ['C++'],
        text: 'Organize large amounts of data into an organized, graphic map with a route mapping system',
        date: '2024-25-04',
        image: '/assets/img/waynavpro.png',
        githubLink: 'https://github.com/carnide1',
    }

];


//sort the projects based on their date
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

//use getelement id to find the projects section row element 
const projectsSection = document.getElementById('projects-section');
//get the element of the button
const loadButton = document.getElementById('load-more');

function createhtml(project) {
    return `
      <div class="col s12 m6 l4">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img alt="${project.title}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
            <p>${project.description}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
            <ul>
              <li><b>Tools:</b> ${project.tools.join(', ')}</li>
              <li>${project.text}</li>
            </ul>
            <div class="card-action">
              <a aria-label="Visit the GitHub repo for project" href="${project.githubLink}" target="_blank" data-position="top" data-tooltip="View Source" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
}


//add the html text from the createhtml function using innerhtml
projectsSection.innerHTML = createhtml(projects[0]);


//function to load the projects by looping through the rest of the projects array
function loadMoreProjects(){
    for(let projectNum = 1; projectNum < projects.size(); projectNum++){
        projectsSection.innerHTML += createhtml(projects[projectNum]);
    }
    
    loadButton.style.display = 'none';
}

loadButton.addEventListener('click', loadMoreProjects);