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
// ==============
// TOKEN SEED
// ==============
let token_seed = process.env.NODE_END === "dev"
    ? "this-is-the-seed-just-local"
    : process.env.SEED_TOKEN;
process.env.SEED = token_seed;
//# sourceMappingURL=config.js.map