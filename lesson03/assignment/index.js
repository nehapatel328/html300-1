//JSON data from data.JSON
[
  {
    "name": "Steve Smith",
    "jobTitle": "Project Manage",
    "company": "Front End Dev Co",
    "experience": "3 years",
    "school": "UW",
    "major": "Marketing",
    "email": "steve@fedc.com",
    "linkedInUrl": "steve.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", ".NET", "C#"
    ]
  },
  {
    "name": "Aaron Katz",
    "jobTitle": "Full Stack Developer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "SU",
    "major": "Computer Science",
    "email": "aaronNotMyemail@uw.com",
    "linkedInUrl": "aaron.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "PHP", "Twig"
    ]
  },
  {
    "name": "Kyle Hendricks",
    "jobTitle": "Starting Pitcher",
    "company": "Chicago Cubs",
    "experience": "12 years",
    "school": "USC",
    "major": "Pitching",
    "email": "kyleH@cubs.com",
    "linkedInUrl": "kyle.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Ruby", "Rails"
    ]
  },
  {
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "company": "Chicago Buls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
  }
 ]

//Convert the component to a template and loop through the JSON data, creating components for each object in the data

//map array to generate articles
//loop through data and template the info
const cardsHTML = cards.map(function(el) {
  let cards = `
  <div class="employee-cards">
    <h1>Employee Cards</h1>
      <div class="card-one">
        <figure>
          <img src="${el.picture}" alt="${el.name}">
          <figcaption>
            <h2>${el.name}</h2>
            <p>${el.jobTitle}</p>
          </figcaption>
        </figure>

      <article class="cards">
        <ul>
          <li class = "card_name">${el.name}</li>
          <li class = "card_jobTitle">${el.jobTitle}</li>
          <li class = "card_company">${el.company}</li>
          <li class = "card_experience">${el.experiece}</li>
          <li class = "card_school">${el.school}</li>
          <li class = "card_major">${el.major}</li>
          <li class = "card_email">${el.email}</li>
          </ul>
        </article>
      </div>
  </div>
  `;
  return cards;
});

//append to add generated code to section
jQuery(document).ready(function(){
  jQuery('.template-hook').append(cardsHTML);
})
