'use strict';

const values = [10, 20, 30];
const URLs = [
    'https://kodaktor.ru/api/m/',
    'https://kodaktor.ru/api/MS2/',
    'https://kodaktor.ru/api/MS3/',
];

(async () => {
    let r;

    for (const index in URLs) {
        r = await fetch(`${URLs[index]}${values[index]}/${+index === 0 ? values[index] : r.result}`, {
            headers: { 'Content-Type': 'application/json' },
        }).then(response => response.json());
    }

    const h1 = document.createElement('h1');
    h1.textContent = r.result;
    document.body.appendChild(h1);
})();
