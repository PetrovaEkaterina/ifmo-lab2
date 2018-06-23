'use strict';

// Взято с kodaktor.ru/j/run_promise.
function run(taskDef) {
    // создать итератор
    const task = taskDef();

    // запустить задание
    let result = task.next();

    // рекурсивная функция, продолжающая вызывать next()
    (function step() {
        // если работа продолжается
        if (!result.done) {
            // создать установившийся объект Promise
            const promise = Promise.resolve(result.value);
            promise
            .then((value) => {
                result = task.next(value);
                step();
            }).catch((error) => {
                result = task.throw(error);
                step();
            });
        }
    }());
}

const values = [10, 20, 30];
const URLs = [
    'https://kodaktor.ru/api/m/',
    'https://kodaktor.ru/api/MS2/',
    'https://kodaktor.ru/api/MS3/',
];

run(function* () {
    let r;
    
    for (const index in URLs) {
        r = yield fetch(`${URLs[index]}${values[index]}/${+index === 0 ? values[index] : r.result}`, {
            headers: { 'Content-Type': 'application/json' },
        }).then(response => response.json());
    }

    const h1 = document.createElement('h1');
    h1.textContent = r.result;
    document.body.appendChild(h1);
});
