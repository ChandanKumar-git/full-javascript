//number
const score=400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); //real time usecase is for pricing in e-comerce_website.

const othernum = 23.8966

// console.log(othernum.toPrecision(3)); //o/p=23.9

const othernum1 = 123.8966
// console.log(othernum1.toPrecision(3)); //o/p=124
//conclusion basically precision maily focus on number before decimal.

//toPrecision(precision?: number | undefined): string
// Number of significant digits. Must be in the range 1 - 21,

const hundreds = 1000000

// console.log(hundreds.toLocaleString()); //o/p=1,000,000 it return us lacal type number

const hundreds1 = 1000000

// console.log(hundreds.toLocaleString('en-IN'));// O/P=10,00,00 this formate is indian

/*********Maths******* */
//   console.log(Math);

//   console.log(Math.abs(-4));//absolute

//   console.log(Math.round(4.8));

//   console.log(Math.ceil(4.2));
//   console.log(Math.floor(4.7));

//   console.log(Math.min(4,5,3,7,9));
//   console.log(Math.max(3,4,6,8,2));

//   console.log(Math.random()); //it laways give values between 0 to 1;

//   console.log(Math.random()*10);

//   console.log(Math.random()*10+1);// for avoiding 0 we add +1 

//   console.log((Math.random()*10)+1); 

  //for avoiding lots of number after decimal we use floor

  //for example we need range between 10 to 20

  const min = 10;
  const max = 20;

  console.log(Math.floor(Math.random() * (max-min+1))+min);