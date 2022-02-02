'use strict'

const footer = document.createElement('footer');
footer.classList = 'p-4 bg-secondary text-white text-center'
footer.style='height:75px; font-size:20px;'
footer.textContent = 'All rights reserved by © Short Straw Developers'

const icon1 = document.createElement('i');
icon1.classList='fab fa-twitter';

const icon2 = document.createElement('i');
icon2.classList='fab fa-instagram';

const icon3 = document.createElement('i');
icon3.classList='fab fa-github';


footer.appendChild(icon1);
footer.appendChild(icon2);
footer.appendChild(icon3);



document.getElementById('footer').appendChild(footer);

document.getElementById('footer');