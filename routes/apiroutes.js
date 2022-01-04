const db = require("../models/Workout.js");


module.exports = function (app) {
  app.get("/api/Workouts", (req, res) => {
    db.Workout.find({})
      .then((workoutdb) => {
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  app.get("/api/Workouts/range", ({}, res) => {
    db.Workout.find({})
      .then((workoutdb) => {
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  app.post("/api/Workouts", (req, res) => {
    const workout = body;
    db.Workout.save(workout, (err, saved))
      .then((saved) => {
        res.json(saved);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  app.put("/api/Workouts/:id", (req, res) => {
    db.Workout.updateOne(
      { _id: mongojs.ObjectId(params.id) },
      { $set: { exercises: req.body } }
    )
      .then((workoutdb) => {
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
};