// write you code below
function handleFormSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    const user = {
      username,
      email,
      phone,
    };
  
    saveUserToLocalStorage(user);
  
    addUserToList(user);
  
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }
  
  function saveUserToLocalStorage(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  function removeUserFromLocalStorage(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(
      u => u.email !== user.email && u.phone !== user.phone
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }
  
  function addUserToList(user) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `
      ${user.username} - ${user.email} - ${user.phone}
      <button onclick="editUser('${user.email}', '${user.phone}')">Edit</button>
      <button onclick="deleteUser('${user.email}', '${user.phone}')">Delete</button>
    `;
    ul.appendChild(li);
  }
  
  function deleteUser(email, phone) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(u => u.email !== email && u.phone !== phone);
  
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    updatedUsers.forEach(user => addUserToList(user));
  }
  
  function editUser(email, phone) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userToEdit = users.find(u => u.email === email && u.phone === phone);
  
    document.getElementById('username').value = userToEdit.username;
    document.getElementById('email').value = userToEdit.email;
    document.getElementById('phone').value = userToEdit.phone;
  
    deleteUser(email, phone);
  }