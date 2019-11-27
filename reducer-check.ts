const fs = require('fs');
const storePath = './src/app/store/';

const reducerFiles = fs.readdirSync(storePath + 'reducers');
const actionFiles = fs.readdirSync(storePath + 'actions');
const effectFiles = fs.readdirSync(storePath + 'effects');
const selectorsFiles = fs.readdirSync(storePath + 'reducers');

const missingActions = [];

const exempt = ['index', 'app'];

reducerFiles.forEach( reducer => {
  const reducerName = reducer.substring(0, reducer.indexOf('.'));
  const actionFile = reducerName + '.actions.ts';
  const isExist = fs.existsSync(storePath + 'actions/' + actionFile);
  if (!isExist && !exempt.includes(reducerName) && !reducer.includes('.map.')) {
    missingActions.push(reducer);
  }
});

console.log('missingActions', missingActions);
