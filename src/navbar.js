export const navBar = () => {
  const nav = document.createElement('nav');
  nav.classList = 'navbar navbar-dark bg-dark';

  const brand = document.createElement('a');
  brand.classList = 'navbar-brand px-3';
  brand.textContent = 'FEASTAURANT';

  const navList = document.createElement('ul');
  navList.classList = 'navbar-nav';

  const navHome = document.createElement('li');
  const home = document.createElement('a');
  home.classList.add('nav-link');
  home.href = '#home';
  home.textContent = 'HOME';
  navHome.classList.add('nav-item');
  navHome.appendChild(home);

  const navMenu = document.createElement('li');
  const menu = document.createElement('a');
  menu.classList.add('nav-link');
  menu.href = '#menu';
  menu.textContent = 'MENU';
  navMenu.classList.add('nav-item');

  navMenu.appendChild(menu);

  const navContact = document.createElement('li');
  const contact = document.createElement('a');
  contact.classList.add('nav-link');
  contact.href = '#contact';
  contact.textContent = 'CONTACT';
  navContact.classList.add('nav-item');

  navContact.appendChild(contact);

  navList.appendChild(navHome);
  navList.appendChild(navMenu);
  navList.appendChild(navContact);

  nav.appendChild(brand);
  nav.appendChild(navList);

  return nav;
};
