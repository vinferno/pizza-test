const fs1 = require('fs');
const before = fs1.readFileSync('./res.json');

const originalObj = JSON.parse(before);
let currentIndex = 0;
const classes = [{name: 'Original', obj: originalObj}];

let final = '';


convertToClass(classes[currentIndex]);
console.log('done');

fs1.writeFileSync('./res.ts', final);
console.log('your welcome!');



function convertToClass({name, obj}) {
  console.log('name', name);
  console.log('start ', name);
  final += `export class ${name[0].toUpperCase() + name.substring(1)} {\n`;
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      final += '    ';
      const type = typeof obj[prop];
      if (type === 'object') {
        if (obj[prop] == null ) {
          final += prop + ': null;\n';
        } else if (Array.isArray(obj[prop])) {
          if (typeof obj[prop][0] === 'object') {
            final += prop + ': ' + prop[0].toUpperCase() + prop.substring(1) + ';\n';
            const concept = {name: prop, obj: obj[prop][0]};
            console.log('concept', concept);
            classes.push(concept);
          } else {
            final += prop + ': ' + typeof obj[prop][0] + '[]' + ';\n';
          }
        } else {
          final += prop + ': ' + prop[0].toUpperCase() + prop.substring(1) + ';\n';
          classes.push({name: prop, obj: obj[prop]});
        }
      } else {
        final += prop + ': ' + typeof obj[prop] + ';\n';
      }
    }
  }
  final += '}\n';
  if (classes[currentIndex + 1]) {
    currentIndex++;
    convertToClass(classes[currentIndex]);
  }
}
