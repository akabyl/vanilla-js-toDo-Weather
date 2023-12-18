// const getNumberDigit = (number, position) => {
//   let num = Math.abs(number);
//   let currentPosition = Math.floor(Math.log10(number));

//   while (number > 0) {
//     let remain = num % 10;
//     if (currentPosition === position) {
//       return remain;
//     }
//     num = Math.floor(num / 10);
//     currentPosition--;
//   }

//   return 0;
// }

// const getNumberDigit = (number, position) => {
//   return Math.floor(Math.abs(number) / Math.pow(10, position - 1)) % 10
// }

// console.log(getNumberDigit(123, 3));
// console.log(getNumberDigit(123, 1));
// console.log(getNumberDigit(121231233, 5));


// const calcilate = (...all) => all.reduce((sum, allSum) => sum + allSum, 0)

// console.log(calcilate(1,2,3,4,5,6));


function getName(name) {
  return function getAge(age) {
    return `Пользователь ${name} имеет ${age} лет`
  }
}

// const personInfo = getName('Abdu')
// // console.log(personInfo);
// console.log(personInfo(26));


// function splitString(stringToSplit, separator) {
//   const arrayOfString = stringToSplit.split(separator)

//   console.log('Original string: ' + stringToSplit);
//   console.log('Split: ' + arrayOfString);
//   console.log('Separator' + separator);
//   console.log(`Array ${arrayOfString.length} elements ${arrayOfString.join(' / ')}`);
// }

// const tempestString = 'И как хорощ тот ноывый мир, где есть такие люди!'
// const monthtString = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек'


// const space = ' '
// const comma = ','

// splitString(tempestString, space)
// splitString(tempestString, comma)
// splitString(monthtString, space)
// splitString(monthtString, comma)

// const users = [
//   {name: 'sasha', age: 35},
//   {name: 'dasha', age: 30},
//   {name: 'masha', age: 29},
// ]

// const resultIndex = users.findIndex((user) => user.age >= 30)

// console.log(users[resultIndex]);
// console.log(resultIndex);


// const user = {
//   name: 'Sasha',
//   age: 26,
//   isDeveloper: true,
//   devLang: ['Js', 'Python', 'TypeScript'],
//   coding(data) {
//     return data
//   }
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user.isDeveloper);
// console.log(user.devLang);
// console.log(user.coding('Javascript'));




// let count = 0
// const int = setTimeout(function () {
//   if(count === 5) {
//     clearTimeout(int)
//   }else {
//     console.log(++count);
//   }
// },1500)




const clockContainer = document.querySelector('.clock') 
const clockTitle = document.querySelector('h1')

function getTime() {
  const data = new Date()
  const minutes = data.getMinutes()
  const hours = data.getHours()
  const seconds = data.getSeconds()
  return Number(clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : seconds}`)
}

function init() {
  getTime()
  setInterval(getTime,1000)
}

init()











