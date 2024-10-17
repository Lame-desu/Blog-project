import express from "express";
import bodyParser from "body-parser";
import url from "url";

const app = express();
const port = 3000;
let path = "";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  let parsed = url.parse(req.url);
  path = parsed.path;
  next();
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/creat", (req, res) => {
  res.render("creat.ejs");
});

let blogsArray = [];

app.post("/add", (req, res) => {
  let splitedBody = {
    header: req.body.header,
    content: req.body.content.split("\n"),
  };
  blogsArray.push(splitedBody);
  res.render("index.ejs", { blogs_array: blogsArray });
});

app.post("/delete", (req, res) => {
  var num = Number(req.body.index);
  delete blogsArray[num];
  console.log(blogsArray);
  res.render("index.ejs", { blogs_array: blogsArray });
});

app.listen(3000, () => {
  console.log(`server is listening on port ${port}.`);
});
