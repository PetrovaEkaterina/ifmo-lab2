// Взято отсюда: https://kodaktor.ru/j/goss_concat

const concat = (...args) => [...args].reduce((x, y) => `${x}${y}`);
export default concat;
// https://www.npmjs.com/package/goss_concat
// https://github.com/GossJS/goss_concat
// console.log(goss_concat(...[1, 2, 3])); // 123
