export const home = () => {
  const landing = document.createElement('div');
  landing.className = 'bg';
  landing.id = 'home';

  const heading = document.createElement('h1');
  heading.innerText = 'We speak the good food language';

  landing.appendChild(heading);

  return landing;
};

export default home;