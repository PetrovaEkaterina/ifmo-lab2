// Взято отсюда: https://kodaktor.ru/j/goss_compose

export default (...funcs) => funcs.reduce((accum, fn) => (...args) => accum(fn(...args), x => x));
