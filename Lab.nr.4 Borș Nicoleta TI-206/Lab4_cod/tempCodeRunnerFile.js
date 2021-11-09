const solver = require('./node_modules/javascript-lp-solver/src/main.js');

//------------------ minimizare ------------------
///*
const minimizare = {
  optimize: 'cost',
  opType: 'min',
  constraints: {
    proteine: { min: 75 },
    glucide: { min: 150 },
    lipide: { min: 100 },
  },
  variables: {
    ciuperci: {
      proteine: 31,
      glucide: 33,
      lipide: 3,
      cost: 40,
    },
    smantana: {
      proteine: 33,
      glucide: 39,
      lipide: 200,
      cost: 50,
    },
    piept: {
      proteine: 212,
      glucide: 0,
      lipide: 26,
      cost: 80,
    },
  },
};
console.log('Minimizare: ', solver.Solve(minimizare));
//*/

//------------------ maximizare ------------------
const maximizare = {
  optimize: 'cost',
  opType: 'max',
  constraints: {
    pregatire: { max: 350 },
    inregistrare: { max: 450 },
    montare: { max: 400 },
  },
  variables: {
    programare: {
      pregatire: 2,
      inregistrare: 3,
      montare: 4,
      cost: 450,
    },
    filosofie: {
      pregatire: 1,
      inregistrare: 2,
      montare: 3,
      cost: 300,
    },
    matematica: {
      pregatire: 4,
      inregistrare: 6,
      montare: 2,
      cost: 600,
    },
  },
};

console.log('Maximizare: ', solver.Solve(maximizare));
