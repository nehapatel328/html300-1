
//Convert the component to a template and loop through the JSON data, creating components for each object in the data

//map array to generate articles
//loop through data and template the info
const cardsHTML = cards.map(function(el) {
  let cards = `
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
  `;
});

//append to add generated code to section
$(".template-hook").append(cardsHTML);
