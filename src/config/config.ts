// ==============
// PORT
// ==============
process.env.PORT = process.env.PORT || "3001";

// ==============
// ENVIROMENT
// ==============
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// ==============
// DATABASE
// ==============
let urlDB;
urlDB =
  process.env.NODE_ENV === "dev"
    ? "mongodb://localhost:27017/cafe"
    : "mongodb+srv://aaandrades:4ZRaZyU5qbPYu9ds@cluster0.rvoig.mongodb.net/cafe";

process.env.URLDB = urlDB;