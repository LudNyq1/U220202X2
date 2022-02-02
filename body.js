'use strict';
console.log('Body.js is alive.')

const fun = () => {
    document.title = 'William was here'
}

const randomText = () => {
    let string = '';
    
    const iterate = Math.floor(Math.random() * 30) + 10;

    for (let index = 0; index < iterate; index++) {
        string += 'Random text. '
    }
    return string;
}

// First
const body = document.getElementById('body');
body.classList.add('container');

const firstRow = document.createElement('div');
firstRow.classList.add('row', 'justify-content-center');

const container1 = document.createElement('div');
container1.classList.add('col-8')

const title = document.createElement('h1');
title.classList.add('text-center', 'h1', 'mx-auto');
title.textContent = 'Body is alive';

body.append(firstRow);
firstRow.append(container1);
container1.append(title);

// More rows
const moreRows = document.createElement('div');
moreRows.classList.add('row', 'justify-content-around');
moreRows.classList.remove('justify-content-center');

for (let index = 0; index < 4; index++) {
    const containers = document.createElement('div');
    containers.classList.add('col-3', 'border', 'border-danger', 'border-5');

    const paragraf = document.createElement('p');
    paragraf.textContent = randomText();
    containers.append(paragraf);

    moreRows.append(containers);
}

body.append(moreRows);


setTimeout(fun, 15000);