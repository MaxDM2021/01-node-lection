const fs = require("fs/promises");
const path = require("path");

async function readMovies() {
   const filePath = path.resolve(__dirname, "movies.txt")
   const text = await fs.readFile(filePath, { encoding: "utf8" });

   console.log(text);
}

module.exports = {
    readMovies,
}

