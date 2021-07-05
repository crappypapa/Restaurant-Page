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
