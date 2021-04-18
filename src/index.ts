import express from "express";
const app = express();

const port: string | number = process.env.PORT || 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (rq, res) => {
  res.send("<h1>Welcome to your server!</h1>");
});

app.get("/users", (rq, res) => {
  res.json("get user");
});

app.post("/users", (rq, res) => {
  let body = rq.body;
  body.name === undefined
    ? res.status(400).json({ ok: false, message: "The name its mandatory" })
    : res.json({ person: body });
});

app.put("/users/:id", (rq, res) => {
  let id = rq.params.id;
  let body = rq.body;
  console.log("ID: ", id);
  console.log("NOMBRE: ", body);
  res.json({
    person: body,
  });
});
app.delete("/users", (rq, res) => {
  res.json("delete user");
});


//create a server object:
app.listen(port, () => console.log(`hosting @${port}`));
