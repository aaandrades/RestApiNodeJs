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
        : process.env.MONGO_URI;
process.env.URLDB = urlDB;
//# sourceMappingURL=config.js.map