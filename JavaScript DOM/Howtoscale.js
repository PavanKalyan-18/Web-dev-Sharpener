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
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    users.push(user);
  
    localStorage.setItem('users', JSON.stringify(users));
  
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  
    displayUsers();
  }
  
  function displayUsers() {

    const userList = document.getElementById('userList');
  
    userList.innerHTML = '';
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
      userList.appendChild(li);
    });
  }
  
  window.onload = function () {
    displayUsers();
  };
  