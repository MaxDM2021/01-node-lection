const fs = require("node:fs"); //NOTE: no promise

async function main() {

const data = fs.readFileSync("movies.txt", { encoding: "utf8" });
console.log(__filename, data);
}
main();

// DO NOT USE!!! *SYNC function



