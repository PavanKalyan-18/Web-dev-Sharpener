function handleFormSubmit(event) {
    event.preventDefault(); // Prevent page reload on form submit
  
    // Get input values from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Create a user object
    const user = {
      username,
      email,
      phone,
    };
  
    // Retrieve users from local storage, if they exist
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Add the new user to the users array
    users.push(user);
  
    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(users));
  
    // Reset the form inputs
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  
    // Update the displayed list of users
    displayUsers();
  }
  
  // Function to display users as list items in the unordered list
  function displayUsers() {
    // Get the unordered list element
    const userList = document.getElementById('userList');
  
    // Clear the existing list items
    userList.innerHTML = '';
  
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Loop through each user and create a list item for each
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
      userList.appendChild(li);
    });
  }
  
  // Display the users when the page loads
  window.onload = function () {
    displayUsers();
  };
  