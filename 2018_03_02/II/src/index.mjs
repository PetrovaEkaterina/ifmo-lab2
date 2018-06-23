function clckFunc() {
    this.textContent = this.id;
}

document.querySelector('#bt1')
        .addEventListener('click', clckFunc);
document.querySelector('#bt2')
        .addEventListener('click', ({target}) => (target::clckFunc)());
// Ошибка заключалась в отсутствии вызова функции `target::clckFunc` внутри стрелочной функции.
// Без этого внутри стрелочной функции `target::clckFunc` транспилируется в `clckFunc.bind(event.target)`.
// При исправлении ошибки это транслируется в `clckFunc.call(event.target)`.