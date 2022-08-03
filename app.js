// Select Hamburger Menu
const nav = document.querySelector('#nav-bar');
const hamburger = document.querySelector('#ham-menu');
const exit = document.querySelector('#exit');
const menu = document.querySelector('#my-menu');
const about = document.querySelector('#menu-1');
const program = document.querySelector('#menu-2');
const join = document.querySelector('#menu-3');
const sponsor = document.querySelector('#menu-4');
const news = document.querySelector('#menu-5');
const others = document.querySelector('#menu-6');

// Create Function to Display Selected Elements
function closeMenu() {
  nav.style.position = 'static';
  hamburger.style.display = 'block';
  exit.style.display = 'none';
  about.style.display = 'none';
  menu.style.display = 'none';
  menu.style.remove('menu');
  program.style.display = 'none';
  join.style.display = 'none';
  sponsor.style.display = 'none';
  news.style.display = 'none';
  others.style.display = 'none';
}

function showMenu() {
  nav.style.position = 'fixed';
  hamburger.style.display = 'none';
  exit.style.display = 'block';
  menu.style.display = 'block';
  menu.classList.add('menu');
  about.style.display = 'block';
  program.style.display = 'block';
  join.style.display = 'block';
  sponsor.style.display = 'block';
  news.style.display = 'block';
  others.style.display = 'block';
}

hamburger.addEventListener('click', showMenu);
exit.addEventListener('click', closeMenu);

// Select Players Section
const players = document.querySelector('.players');
const body = document.querySelector('.body');
body.style.backgroundColor = '#ebe5c9';

// Create Content for Players Section
const playerDetails = [
  {
    Picture: './images/stars/luca.png',
    Name: 'Luca Doncic',
    Team: 'Dallas Mavericks',
    Position: 'PG',
    Bio: 'Nicknamed "El Matador", He will dominate you with his power, athlecism and insane court vision.',
    class: 'star-1',
  },
  {
    Picture: './images/stars/giannis.png',
    Name: 'Giannis Antetokounpo',
    Team: 'Milwaukee Bucks',
    Position: 'SF',
    Bio: 'Called the Greek Freak, he is a force to be reckoned with in the NBA.',
    class: 'star-2',
  },
  {
    Picture: './images/stars/curry.jpeg',
    Name: 'Steph Curry',
    Team: 'Golden State Warriors',
    Position: 'PG',
    Bio: 'This Guy will hurt you from anywhere and you cannot do anything about it. He is the all-time leader in three points made.',
    class: 'star-3',
  },
  {
    Picture: './images/stars/lebron.png',
    Name: 'LeBron James',
    Team: 'LA Lakers',
    Position: 'SF',
    Bio: 'Regarded by some as the Greatest of all Time, LeBron is not one you mess with. He is King James.',
    class: 'star-4',
  },
  {
    Picture: './images/stars/jokic.png',
    Name: 'Nikola Jokic',
    Team: 'Denver Nuggets',
    Position: 'C',
    Bio: 'Called the Joker, do not let his tricks foll you. When he means business, he means business.',
    class: 'star-5',
  },
  {
    Picture: './images/stars/tatum.png',
    Name: 'Jayson Tatum',
    Team: 'Boston CCeltics',
    Position: 'SF',
    Bio: 'This Guy is amazing at what he does. He can drop points however he likes.',
    class: 'star-6',
  }];

// Create Function to Populate the Section
function fillPlayer() { /* eslint-disable-next-line */ 
  for (let i = 0; i < playerDetails.length; i++) {
    const container = document.createElement('div');
    container.className = 'container';
    container.setAttribute('id', playerDetails[i].class);
    const picture = document.createElement('img');
    picture.className = 'star-img';
    picture.setAttribute('src', playerDetails[i].Picture);
    const starBio = document.createElement('div');
    starBio.className = 'star-bio';
    const name = document.createElement('h3');
    name.className = 'star-name';
    name.innerHTML = playerDetails[i].Name;
    const team = document.createElement('p');
    team.className = 'team';
    team.innerHTML = playerDetails[i].Team;
    const position = document.createElement('p');
    position.className = 'position';
    position.innerHTML = playerDetails[i].Position;
    const bio = document.createElement('p');
    bio.className = 'bio';
    bio.innerHTML = playerDetails[i].Bio;

    // Append name, position and bio to starBio
    starBio.appendChild(name);
    starBio.appendChild(team);
    starBio.appendChild(position);
    starBio.appendChild(bio);
    // Append Elements to Container
    container.appendChild(picture);
    container.appendChild(starBio);

    // Append Container to Players
    players.appendChild(container);
  }
}

// Call the Function
fillPlayer();
