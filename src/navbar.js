export const navBar = () => {
  const nav = document.createElement('nav');
  nav.classList = 'navbar navbar-dark bg-dark'

  const brand = document.createElement('a');
  brand.classList = 'navbar-brand px-3';
  brand.textContent = 'Restaurant';

  const navList = document.createElement('ul');
  navList.classList = 'navbar-nav';

  const navHome = document.createElement('li'); //creating the li tag
  const home = document.createElement('a'); //creating the a tag
  home.classList.add('nav-link');
  home.href = '#home'; // creating the class for a tag
  home.textContent = 'HOME';  //creating the home text for the a tag
  navHome.classList.add('nav-item'); // creating class for li tag
  home.id = 'home'; //setting an id for the home menu
  navHome.appendChild(home); //adding the a tag into the li tag

  
  const navMenu = document.createElement('li'); //creating the li tag
  const menu = document.createElement('a'); //creating the a tag
  menu.classList.add('nav-link');
  menu.href = '#menu'; // creating the class for a tag
  menu.textContent = 'MENU',  //creating the home text for the a tag
  navMenu.classList.add('nav-item'); // creating class for li tag
  menu.id = 'menu'; //setting an id for the home menu
  navMenu.appendChild(menu); //adding the a tag into the li tag

  
  const navContact = document.createElement('li'); //creating the li tag
  const contact = document.createElement('a'); //creating the a tag
  contact.classList.add('nav-link');
  contact.href = '#contact'; // creating the class for a tag
  contact.textContent = 'CONTACT', //creating the home text for the a tag
  navContact.classList.add('nav-item'); // creating class for li tag
  contact.id = 'contact'; //setting an id for the home menu
  navContact.appendChild(contact); //adding the a tag into the li tag

  navList.appendChild(navHome);
  navList.appendChild(navMenu);
  navList.appendChild(navContact);

  nav.appendChild(brand);
  nav.appendChild(navList);

  return nav;
};

