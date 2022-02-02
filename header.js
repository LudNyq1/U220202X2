'use strict';
const header = document.getElementById('header');

//Some links, randomly picked
const linkList =    [
                        ['Herkommer Notion', 'https://herkommer.notion.site/herkommer/TE42122-d30d33616e4d4a85be12795af8008df6'], 
                        ['GitHub main Branch', 'https://github.com/LudNyq1/U220202X1/tree/main'], 
                        ['LudNyq1 Wiki', 'https://github.com/LudNyq1/PersonalWiki']
                    ];

//Created div tag for the header Navigation bar
const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg navbar-light bg-light';

const container = document.createElement('div');
container.classList.add('container-fluid');

const navTitle = document.createElement('a');
navTitle.setAttribute('class', 'navbar-brand text-danger')
// navTitle.classList.add('navbar-brand', 'text-danger');
navTitle.innerText = 'Team SSD';

const navButton = document.createElement('button');
navButton.classList.add('navbar-toggler');
navButton.type = 'button';
navButton.setAttribute('data-bs-toggle', 'collapse')
navButton.setAttribute('data-bs-target', '#navbarNavAltMarkup')
navButton.setAttribute('aria-controls', 'navbarNavAltMarkup')
navButton.setAttribute('aria-expanded', 'false')
navButton.setAttribute('aria-label', 'Toggle navigation')

const navSpan = document.createElement('span');
navSpan.classList.add('navbar-toggler-icon');

const collapseNav = document.createElement('div');
collapseNav.id = 'navbarNavAltMarkup';
collapseNav.className = 'collapse navbar-collapse';

const ulDiv = document.createElement('div');
ulDiv.className = 'navbar-nav';

//Creates a list item inside the navbar for each item in the linkList array
linkList.forEach(link => {
    let a = document.createElement('a');
    // li1.className = 'nav-item';
    a.setAttribute('aria-current', 'page')
    // let a1 = document.createElement('a');
    a.className = 'nav-link active';
    a.textContent = link[0];
    a.href = link[1];
    // li1.append(a1);
    ulDiv.append(a);
})

//Appends the elements to the DOM
header.append(nav);
nav.append(container);
container.append(navTitle);
container.append(navButton);
navButton.append(navSpan);
container.append(collapseNav);
collapseNav.append(ulDiv);