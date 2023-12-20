const express = require("express");
const router = express.Router();
const patientControllers = require("../Controllers/patient-controllers");

 
//assign functionality to requests for URLs

//localhost:3001/patient/

router.get("/", patientControllers.getAllPatients);

 //localhost:3001/patient/

router.post("/", patientControllers.addPatient);

 //localhost/3001/patient/:id

router.get("/:id", patientControllers.getById);

 //localhost:3001/patient/:id

router.put("/:id", patientControllers.updatePatient);
 
//localhost:3001/patient/:id

router.delete("/:id", patientControllers.deletePatient);

 module.exports = router;