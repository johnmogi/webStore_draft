1. export:
go to bin
(/home/johnmogi/Documents/robo3t-1.3.1-linux-x86_64-7419c406/bin/)
mongodump -d <dbName>

2. import:
go to bin
(/home/johnmogi/Documents/robo3t-1.3.1-linux-x86_64-7419c406/bin/)
[sudo] / win cmd admin
mongorestore -d <dbName> dump/<dbName>
refresh robo3t
2.2 another import example (an undumped db):
 mongorestore -d OnlineStore /home/johnmogi/Documents/robo3t-1.3.1-linux-x86_64-7419c406/bin/dump/OnlineStore/


3. {model build at server}: 
const mongoose = require("mongoose");
const MealSchema = mongoose.Schema({
    name: String
}, { 
    versionKey: false, // Don't add __v field
    toJSON: { virtuals: true }, // Allow virtual table (JOIN)
    id: false // Don't add id field
});
MealSchema.virtual("receps", {
    ref: "Receps",
    localField: "_id",
    foreignField: "recepId"
});
const Meal = mongoose.model("Meal", MealSchema, "Meals");
module.exports = Meal;


4. {mongo-model with FK}:
const mongoose = require("mongoose");
const RecepSchema = mongoose.Schema({
    mealId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal"
    },
chefName: String,
recepieName: String,
ingredients: String,
preperation: String
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});
RecepSchema.virtual("meal", {
    ref: "Meal",
    localField: "meal",
    foreignField: "_id",
    justOne: true // Don't put the recep object inside an array
});
const Recep = mongoose.model("Recep", RecepSchema, "Recep");
module.exports = Recep;

5. extend categories here from past excercise.
