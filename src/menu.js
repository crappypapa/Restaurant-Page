export const menu = () => {
  const menuItems = [
    {
      dish: ' Roast Meat with sliced limes',
      price: '$9.99',
      description: 'Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. ',
      image: 'https://images.unsplash.com/photo-1509402308-817902776267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653&q=80',
    },
    {
      dish: ' Grilled Meat',
      price: '$9.99',
      description: 'Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. ',
      image: 'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      dish: ' Salad with Guacamole',
      price: '$9.99',
      description: 'Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. ',
      image: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
    {
      dish: ' Vegetable Salad',
      price: '$9.99',
      description: 'Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. ',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      dish: 'Burger',
      price: '$9.99',
      description: 'Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. ',
      image: 'https://images.unsplash.com/photo-1623945359666-8f855090ee81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      dish: ' Doughnut',
      price: '$9.99',
      description: 'Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty. ',
      image: 'https://images.unsplash.com/photo-1621250755389-37ba6d72f969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=674&q=80',
    },
  ];

  const menuSection = document.createElement('div');
  menuSection.className = 'section  mb-3';
  menuSection.id = 'menu';

  const sectionTitle = document.createElement('h3');
  sectionTitle.className = 'px-5';
  sectionTitle.innerHTML = 'Menu';

  menuSection.appendChild(sectionTitle);

  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';

  menuItems.forEach((item) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card my-3';

    const cardImg = document.createElement('img');
    cardImg.className = 'card-img-top';
    cardImg.src = `${item.image}`;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardItem = document.createElement('h4');
    cardItem.className = 'card-title';
    cardItem.append(item.dish);

    const cardDescription = document.createElement('p');
    cardDescription.className = 'card-text description';
    cardDescription.append(item.description);

    const cardPrice = document.createElement('p');
    cardPrice.className = 'card-text';
    cardPrice.append(item.price);

    const button = document.createElement('button');
    button.classList = 'btn btn-primary';
    button.textContent = 'Order';

    rowDiv.appendChild(colDiv);
    colDiv.appendChild(cardDiv);
    // colDiv.appendChild(cardBody);
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardBody);
    cardBody.appendChild(cardItem);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(button);
  });

  menuSection.appendChild(rowDiv);

  return menuSection;
};
