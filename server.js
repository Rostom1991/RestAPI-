const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const connectdb = require("./connectdb/connectdb");
const Users = require("./models/Users");
connectdb();

app.use(express.json());

//1- get return al users

// app.post("/api/task", (req, res) => {
//   Users.create(req.body, (err) => {
//     err ? res.send("failed to add") : res.send("add succefull");
//   });
// });

// 2- post add a new user to the database

// app.get("/api/task", (req, res) => {
//   Users.find({}, (err, data) => {
//     err ? console.log("not found") : console.log("all data", data);
//   });
//   res.send("done");
// });

// 3- put edit a user by id

// app.put("/api/task/:id", (req, res) => {
//   Users.findByIdAndUpdate(req.params.id, req.body, (err) => {
//     err ? console.log("update failed", err) : console.log("update is done");
//   });
// });

// app.put("/api/task/:id", (req, res) => {
//   Users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//     .then((data) => res.json(data))
//     .catch((err) => console.log("Update failed", err));
// });

// 4- delete remove a user by id

// app.delete("/api/task/:id", (req, res) => {
//   Users.findByIdAndRemove(req.params.id, (err) => {
//     err ? res.send("failed delete ", err) : res.send("deleted is done");
//   });
// });

app.listen(port, (err) => {
  err
    ? console.log("err", err)
    : console.log("server is running on port", port);
});