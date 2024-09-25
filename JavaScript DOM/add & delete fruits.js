// Get the form and fruit list elements
const form = document.querySelector('form');
const fruitInput = document.getElementById('fruit-to-add');
const fruitList = document.querySelector('.fruits');

// Function to create and return a new li element with buttons
function createFruitElement(fruitName) {

  const li = document.createElement('li');
  li.classList.add('fruit');
  li.textContent = fruitName;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'x';

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Edit';

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  deleteBtn.addEventListener('click', () => {
    fruitList.removeChild(li);
  });

  return li;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fruitName = fruitInput.value.trim();

  const newFruit = createFruitElement(fruitName);
  fruitList.appendChild(newFruit);

  fruitInput.value = '';
});

document.querySelectorAll('.fruit').forEach((fruitItem) => {
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Edit';

  fruitItem.appendChild(editBtn);

  const deleteBtn = fruitItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    fruitList.removeChild(fruitItem);
  });
});