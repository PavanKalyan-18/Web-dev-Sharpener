const mainheading = document.querySelector('#main-heading');
mainheading.style.textAlign = 'right';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.margin = '30px'; 
fruits.style.padding = '30px'; 
fruits.style.width = '50%'; 
fruits.style.borderRadius = '5px'; 
fruits.style.listStyleType = 'none';

const basketheading = document.querySelector('h2');
basketheading.style.color = 'brown';

const fruititems = document.querySelectorAll('.fruit');
for(let i = 0; i < fruititems.length; i++){
  fruititems[i].style.backgroundColor = 'white'; 
  fruititems[i].style.margin = '10px'; 
  fruititems[i].style.padding = '10px'; 
  fruititems[i].style.borderRadius = '5px'; 
}

const oddfruitlist = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i = 0; i < oddfruitlist.length; i++){
  oddfruitlist[i].style.backgroundColor = 'lightgrey';
}

const evenfruitlist = document.querySelectorAll('.fruit:nth-child(even)');
for(let i = 0; i < evenfruitlist.length; i++){
  evenfruitlist[i].style.backgroundColor = 'brown';
  evenfruitlist[i].style.color = 'white';
}