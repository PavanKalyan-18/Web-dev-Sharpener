// Add input element inside form, before button, to take fruit description
const form = document.querySelector('form');
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description';

const button = form.querySelector('button');
form.insertBefore(descriptionInput, button);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fruitName = document.getElementById('fruit-to-add').value.trim();
  const fruitDescription = document.getElementById('description').value.trim();

  if (fruitName && fruitDescription) {
    const fruitList = document.querySelector('ul.fruits');

    const fruitItem = document.createElement('li');
    fruitItem.className = 'fruit';
    fruitItem.style.display = 'flex';
    fruitItem.style.flexDirection = 'column';
    fruitItem.innerHTML = `${fruitName} <button class="delete-btn">x</button>`;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.style.fontStyle = 'italic';
    descriptionParagraph.innerText = fruitDescription;

    fruitItem.appendChild(descriptionParagraph);

    fruitList.appendChild(fruitItem);

    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
  } 
});

document.querySelector('ul.fruits').addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.parentElement;
    li.remove();
  }
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById('filter');

filter.addEventListener('keyup', function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName('fruit');
  for (let i = 0; i < fruitItems.length; i++) {
    const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    if (currentFruitText.indexOf(textEntered) === -1) {
      fruitItems[i].style.display = 'none'; 
    } else {
      fruitItems[i].style.display = 'flex'; 
    }
  }
});