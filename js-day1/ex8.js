//Getting comfortable with filter, map and forEach
// exerise 1,2,3
function namesToHTMLList(namesArray) {
  const items = namesArray.map(name => `<li>${name}</li>`).join(' ');
  return `<ul> ${items} </ul>`;
}

const names = ["Lars", "Peter", "Jan", "Ian"];
console.log(namesToHTMLList(names));
