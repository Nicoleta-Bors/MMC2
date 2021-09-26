//prettier-ignore
const A = 6, B = 3, GAMA = 0.5, EPSILON = Math.pow(10, -6), DELTA = 0.06;
const myFunction = (x, y) => A * Math.pow(x, 2) + 3 * x * y + B * Math.pow(y, 2) - A * x - B * y;
const gradientFunction = (x, y) => [2 * A * x + 3 * y - A, 3 * x + 2 * B * y - B];
const magnitudineFunction = (x, y) => Math.pow(x, 2) + Math.pow(y, 2);

//--------------------Fractionarea pasului-------------------
const proceduraDeFractionareAPasului = (x, y, lamda, gradX, gradY, xValue, magnitudinePatrat) => {
  let executeFract = true;
  while (executeFract) {
    let z = [x - lamda * gradX, y - lamda * gradY];
    let zValue = myFunction(z[0], z[1]);

    if (zValue - xValue <= -DELTA * lamda * magnitudinePatrat) {
      executeFract = false;
      return [z[0], z[1], lamda];
    } else {
      lamda = lamda * GAMA;
    }
  }
};

const minimMetodaGradientului = () => {
  //prettier-ignore
  let x = A, y = B, k = 0, lamda = 1; //pasul
  let executeMinim = true;

  while (executeMinim) {
    let functionValue = myFunction(x, y);
    let gradientValue = gradientFunction(x, y);
    let magnitudinePatrat = magnitudineFunction(gradientValue[0], gradientValue[1]);
    //prettier-ignore
    console.log(`k = ${k}\nf(x) = ${functionValue}\ngradient = ${gradientValue}\nmagnitudine = ${Math.sqrt(magnitudinePatrat)}\nxk=(${x}, ${y}))`,);

    if (Math.sqrt(magnitudinePatrat) <= EPSILON || k === 1000) {
      //prettier-ignore
      console.log( `%c----------------------------------------------------------------\nPunctul minim este: (${x}, ${y})\n----------------------------------------------------------------`, 'color: yellow');
      executeMinim = false;
    } else {
      //prettier-ignore
      let valuesOfZ = proceduraDeFractionareAPasului(x, y, lamda, gradientValue[0], gradientValue[1], functionValue, magnitudinePatrat,);
      x = valuesOfZ[0];
      y = valuesOfZ[1];
      lamda = valuesOfZ[2];
      k++;
    }
  }
};

minimMetodaGradientului(); //nu garanteaza ca gasim minumul global
