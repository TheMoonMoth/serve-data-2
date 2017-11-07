const express = require("express");
const cors = require("cors");

var teacherArray = [{
  id: 1,
  fullName: "Kyle Coberly",
  title: "Faculty Director",
  numberOfDogs: 0
},{
  id: 2,
  fullName: "Danny Fritz",
  title: "Lead Instructor",
  numberOfDogs: 0
},{
  id: 3,
  fullName: "CJ Reynolds",
  title: "Lead Instructor",
  numberOfDogs: 0
},{
  id: 4,
  fullName: "Brooks Patton",
  title: "Lead Instructor",
  numberOfDogs: 0
},{
  id: 5,
  fullName: "Roberto Ortega",
  title: "Lead Instructor",
  numberOfDogs: 1
},{
  id: 6,
  fullName: "Chad Drummond",
  title: "Instructor",
  numberOfDogs: 0
},{
  id: 7,
  fullName: "Kim Schlesinger",
  title: "Instructor",
  numberOfDogs: 0
},{
  id: 8,
  fullName: "Peter Ostiguy",
  title: "Associate Instructor",
  numberOfDogs: 1
},{
  id: 9,
  fullName: "Cass Torske",
  title: "Resident",
  numberOfDogs: 1
},{
  id: 10,
  fullName: "Matt Winzer",
  title: "Resident",
  numberOfDogs: 2
},{
  id: 11,
  fullName: "Aaron Goodman",
  title: "Resident",
  numberOfDogs: 0
},{
  id: 12,
  fullName: "Michelle Bergquist",
  title: "Resident",
  numberOfDogs: 1
}];

const app = express();
app.use(cors());

function findById(dataArray, idNum) {
  for (var i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id == idNum) {
      return dataArray[i];
    }
  }
}

app.get("/", function (request, response) {
  response.json(teacherArray);
});

app.get("/:id", function (request, response) {
  var teachId = findById(teacherArray, request.params.id);
  if (!teachId) {
    response.status(404);
    response.json({error: {message: "No teacher with that ID"}});
  }
  response.json(teachId);
});

app.listen(9000);
