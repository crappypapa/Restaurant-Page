import { navBar } from './navbar';
import { contact } from './contact';
import { menu } from './menu';
import { home } from './home';
import './main.scss';

const body = document.getElementsByTagName('body')[0];
body.prepend(navBar());

const contentDiv = document.getElementById('content');
contentDiv.append(home());
contentDiv.append(menu());
contentDiv.append(contact());

const menus = document.querySelector('#menus');
const homes = document.querySelector('#homes');
const contacts = document.querySelector('#contacts');

homes.addEventListener('click', () => {
  document.querySelector('#menu').classList.remove('show');
  document.querySelector('#home').classList.remove('hide');
  document.querySelector('#home').classList.add('show');
  document.querySelector('#menu').classList.add('hide');
  document.querySelector('#contact').classList.add('hide');
  document.querySelector('#contact').classList.remove('show');
});

menus.addEventListener('click', () => {
  document.querySelector('#home').classList.add('hide');
  document.querySelector('#home').classList.remove('show');
  document.querySelector('#menu').classList.remove('hide');
  document.querySelector('#menu').classList.add('show');
  document.querySelector('#contact').classList.add('hide');
  document.querySelector('#contact').classList.remove('show');
});

contacts.addEventListener('click', () => {
  document.querySelector('#contact').classList.remove('hide');
  document.querySelector('#contact').classList.add('show');
  document.querySelector('#home').classList.add('hide');
  document.querySelector('#home').classList.remove('show');
  document.querySelector('#menu').classList.add('hide');
  document.querySelector('#menu').classList.remove('show');
});
