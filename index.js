let mongoose = require("mongoose");
const person =require("./models/Person")


class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect("mongodb+srv://hamza:hamza@cluster0.9m39d.mongodb.net/test", {
        
      })

      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}
module.exports = new Database();



let personModel = require("./models/Person");
let createPerson = new personModel({
  name: "Hamza Mezlini",
  age: 22,
  favoriteFoods: ["Batata", "chapati", "chorba"],
});

createPerson
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });


  let arrayOfPeople = [
    { name: "colsen baker", age: 23, favoriteFoods: ["Tacos","marga","kamouniya"] },
    { name: "faysel ben fareh", age: 42, favoriteFoods: ["Lablebi" , "pasta", "pizza"] },
    { name: "bechir tacha", age: 35, favoriteFoods: ["Kafteji", "rice", "koskssi"] },
    { name: "manel maaleoui", age: 25, favoriteFoods: ["mloukhiya","lablebi","S7an Tounsi"] },
    { name: "najet mejri", age: 30, favoriteFoods: ["marga","tajin","hargma"] },
  ];
  let test = personModel.create(arrayOfPeople, async (err, data) => {
    if (err) {
      console.log(err);
    }
    await console.log(data);
  });

  
  person.find({ name: "hamza mezlini " }, (err, data) => {
    if (err) throw "this is an error";
    console.log(data);
  });


  person.find({ age: 29 }, (err, data) => {
    if (err) throw "this is an error";
    console.log(data);
  });

  
  person.findOne({ favoriteFoods: "Lablebi" }, (err, data) => {
    if (err) throw err;
    console.log(data);
  });

 
  let id = "62095f267fde10bc6f2472d3";
  person.findById({ _id: id }, (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  
  let id = "62095f267fde10bc6f2472d2";
  person.findByIdAndUpdate(
    { _id: id },
    { $push: { favoriteFoods: "Lablebi" } },
    (err, res) => {
      if (err) throw err;
      res.save();
      console.log(res);
    }
  );
  
  person.findOneAndUpdate(
    { name: "manel maalaoui" },
    { $set: { age: 20 } },
    { new: true },
    (err, res) => {
      if (err) throw err;
      res.save();
      console.log(res);
    }
  );


  let id = "62095f267fde10bc6f2472d6";
  person.findByIdAndRemove({ _id: id }, (err, data) => {
    if (err) throw err;
    console.log(data);
  });

 
  person.deleteMany({ name: "faysel" }, (err, res) => {
    if (err) throw err.done();
    console.log(res);
  });
  
  person
    .find({ favoriteFoods: "Lablebi" })
    .sort({ name: "asc" })
    .limit(2)
    .select("-age")
    .exec((err, data) => {
      if (err) throw err;
      console.log(data);
    });