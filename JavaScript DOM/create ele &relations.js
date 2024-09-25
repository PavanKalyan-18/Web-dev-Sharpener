const mainheading = document.querySelector('#main-heading');

const subHeading = document.createElement('h3');
subHeading.innerText = 'Buy high quality organic fruits online';
subHeading.style.fontStyle = 'italic';

mainheading.after(subHeading);

const basketHeading = document.querySelector('#basket-heading');

const para = document.createElement('p');
para.innerText = 'Total fruits: 4';
para.id = 'fruits-total';

basketHeading.after(para)