const { greeting } = require("./examples/04-common-js/helpers/greeting")


function main() {
    greeting("Bob")
}

main();





// const fs = require('fs').promises;
// const path = require('path');


// (async () => {
//     try {
//     const data = await fs.readFile(path.resolve('./data.txt'), 'utf8')
//     console.log(data)

//     const newContent = `${data} school`
//     await fs.writeFile('./data1.txt', newContent, 'utf8');

//     // переименование и пеернос
//     // await fs.rename( './dateUtilsNewName.js', './tmp/dateUtilsNewName.js');

// // удаление

//     // await fs.unlink('./tmp/dateUtilsNewName.js');

//     console.log(await fs.readdir('./tmp'));
//     fs.appendFile('./data1.txt', 'lecture', 'utf8')

//     } catch (err) {
//         console.error(err)
//     }
// })();



// fs.readFile(path.resolve('./data.txt'), 'utf8', (error, data) => {
//     if(error) {
//         console.error(error);
//     }
//     console.log(data);
// })

// console.log(1233423);


// const path = require('path');

// console.log(path.resolve('dateUtils.js'));



// ===================================

// const Calc = require('calc-js').Calc;

// console.log(process.argv);
// const [,, a, b] = process.argv
// const a = process.argv[2]
// const b = process.argv[3]


// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish())

// parseInt - для целых чисел
// parseFloat - для чисел с плавающей запятой 

// =====================================

// const { getCurrentDate } = require("./dateUtils")

// console.log(`get current date function result: ${ getCurrentDate()}`)
// console.log(process.argv);