// Select the hamburger icon and the navigation menu element from the DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

// Define the mobileMenu() that toggles the 'active' class on the hamburger icon and the nav menu
function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll'); // add or remove the 'no-scroll' class to the body element
}

// Add a click event listener to the hamburger icon that triggers the mobileMenu function
hamburger.addEventListener('click', mobileMenu);

// Define the closeMenu() that removes the 'active' class from the hamburger icon and the nav menu
function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll'); // remove the 'no-scroll' class from the body element
}

// Select all the nav links and add a click event to each one that triggers the closeMenu function
navLink.forEach((n) => n.addEventListener('click', closeMenu));

// CREATING FEATURED SPEAKER SECTION DYNAMICALLY

const speakers = document.querySelector('.featured-speakers');

const speakersDetails = [
  {
    id: 1,
    name: 'Prof. Nana Aba Asare Amfo',
    title: 'Vice-chancellor, University of Ghana.',
    speakerImg: 'images/chris-mills.jpg',
    about:
      'Prof. Nana Aba Appiah Amfo is a university administrator and the current Vice-chancellor at UG.',
  },
  {
    id: 2,
    name: 'Mr. Ransford Gyamsi',
    title: 'Professor, University of Ghana.',
    speakerImg: 'images/brad-smith.jpg',
    about:
      'Prof Gyampo is an Associate Professor of Political Science and Director of the Centre for European Studies of UG.',
  },
  {
    id: 3,
    name: 'Kojo Oppong-Nkrumah',
    title: 'MP & Information Minister. Republic of Ghana.',
    speakerImg: 'images/images.jpg',
    about:
      'Kojo Oppong-Nkrumah is a Ghanaian politician and Lawyer. He is the member of parliament for the Ofoase-Ayirebi constituency.',
  },
  {
    id: 4,
    name: 'carolyn-chandler',
    title: 'Actress & Media Personality.',
    speakerImg: 'images/carolyn-chandler.jpg',
    about:
      'Naa Ashorkor is an award-winning Ghanaian actress and a media personality who currently works at Asaase Radio.',
  },
  {
    id: 5,
    name: 'Nana Asare Anamoah',
    title: 'Media Personality',
    speakerImg: 'images/jennifer-jones.jpg',
    about:
      'Nana Aba Anamoah is a Ghanaian award-winning media personality,news anchor, and broadcaster.',
  },
  {
    id: 6,
    name: 'darby-frey',
    title: 'Veteran Sports Journalist',
    speakerImg: 'images/darby-frey.jpg',
    about:
      ' Mr. Yeboah is a Ghanaian veteran sports journalist, writer and commentator.',
  },
];

function randomSpeaker() {
  speakers.innerHTML = speakersDetails
    .map(
      (speaker) => `
         <div class="speakers-details">
            <img src=${speaker.speakerImg} alt="UG Vice-chancellor" />
            <div class="details">
              <h4>${speaker.name}</h4>
              <p class="title">${speaker.title}</p>
              <hr />
              <p class="position">${speaker.about}</p>
            </div>
          </div>
`,
    )
    .join('');
}

randomSpeaker();
