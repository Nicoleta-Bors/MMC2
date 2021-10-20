//prettier-ignore
const A = 6, B = 3, matriceaHessiana = [2 * A, 3, 3, 2 * B];
const EPSILON = Math.pow(10, -3);
const myFunction = (x, y) => A * Math.pow(x, 2) + 3 * x * y + B * Math.pow(y, 2) - A * x - B * y;
const gradientFunction = (x, y) => [2 * A * x + 3 * y - A, 3 * x + 2 * B * y - B];
const magnitudinePatratFunction = (x, y) => Math.pow(x, 2) + Math.pow(y, 2);

const minimMetodaDirectiilorConjugate = () => {
  //prettier-ignore
  let myX, d, alfa, gradient, magnitudinePatrat, dNext, k = 0, execute = true;
  let xNext = [A, B];
  let gradientNext = gradientFunction(xNext[0], xNext[1]);
  let magnitudinePatratNext = magnitudinePatratFunction(gradientNext[0], gradientNext[1]);

  if (Math.sqrt(magnitudinePatratNext) == 0 /*|| Math.sqrt(magnitudinePatratNext) <= EPSILON*/)
    execute = false;
  else dNext = [-gradientNext[0], -gradientNext[1]];

  while (execute) {
    myX = [xNext[0], xNext[1]];
    gradient = gradientNext;
    magnitudinePatrat = magnitudinePatratNext;
    d = dNext;

    alfa =
      -(gradient[0] * d[0] + gradient[1] * d[1]) /
      ((matriceaHessiana[0] * d[0] + matriceaHessiana[1] * d[1]) * d[0] +
        (matriceaHessiana[2] * d[0] + matriceaHessiana[3] * d[1]) * d[1]);
    //prettier-ignore
    console.log(`k = ${k}\ngradient = ${gradient}\nmagnitudine = ${Math.sqrt(magnitudinePatrat)}\nafla = ${alfa}\nd = (${d[0]} , ${d[1]})\nXk = (${myX[0]} , ${myX[1]})`,
    );

    xNext = [myX[0] + alfa * d[0], myX[1] + alfa * d[1]];
    gradientNext = gradientFunction(xNext[0], xNext[1]);
    magnitudinePatratNext = magnitudinePatratFunction(gradientNext[0], gradientNext[1]);

    if (Math.sqrt(magnitudinePatratNext) == 0 /*|| Math.sqrt(magnitudinePatratNext) <= EPSILON*/)
      execute = false;
    else {
      dNext = [
        -gradientNext[0] + (magnitudinePatratNext / magnitudinePatrat) * d[0],
        -gradientNext[1] + (magnitudinePatratNext / magnitudinePatrat) * d[1],
      ];
      k++;
    }
  }
  console.log(
    `k = ${k + 1}\ngradient = ${gradientNext}\nmagnitudine = ${Math.sqrt(
      magnitudinePatratNext,
    )}\nafla = ${alfa}\nd = (${dNext[0]} , ${dNext[1]})\nXk = (${xNext[0]} , ${xNext[1]})`,
  );
  console.log(
    `%c----------------------------------------------------------------\nPunctul minim este: (${xNext[0]}, ${xNext[1]})\n----------------------------------------------------------------`,
    'color: yellow',
  );
};

minimMetodaDirectiilorConjugate();
