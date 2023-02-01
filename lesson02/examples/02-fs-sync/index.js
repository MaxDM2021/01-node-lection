const fs = require("node:fs/promises"); //NOTE: no promise

async function main() {
try {
const data = await fs.readFile("movies.txt", { encoding: "utf8" });
console.log(data)
const data2 = await fs.readFile("movies2.txt",  "utf8" );
console.log(data2)


// overwrite file every time  перезаписать
// await fs.writeFile("movies2.txt", "Line2");
// await fs.writeFile("movies2.txt", "Line3");

//
// добавить в конец текста фаила
await fs.appendFile("movies2.txt", "Line1\n");
await fs.appendFile("movies2.txt", "Line2\n");

// remove
await fs.unlink("movies2.txt", "Line1\n");



} catch (error){

    console.log(error);
    process.exit(1);
}
}
main();



