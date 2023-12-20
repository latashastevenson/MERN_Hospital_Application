const PatienSchema = require("../Model/patientinformation");

 
//utilize function expression to get all cars from Database

 const getAllPatients = async (req, res, next) =>{

    let patients;

    try{

        patients = await PatienSchema.find()

    }catch(err){

    console.log(err)

    }

    if(!patients){

        return res.status(404).json({message: "No Patients Found"})

    }

    return res.status(200).json({patients});

}
const getById = async (req, res, next) =>{

    const id = req.params.id;

    let patient;

    try{

        patient = await PatienSchema.findById(id);

    }catch(err){

        console.log(err)

    }

    if(!patient){

        return res.status(404).json({message: "No Patient Found"})

    }

    return res.status(200).json({patient})

};



const addPatient = async (req, res)=>{
    const {name, dob, insurance, patient_id, discharged} = req.body
    let patient;
    try{
        patient = new PatienSchema({
            name, 
            dob, 
            insurance, 
            patient_id, 
            discharged

        });

        await patient.save();
    }catch(err){
        console.log(err)
    }
    if(!patient){
        return res.status(500).json({message : "Unable to Add Patient"})
    }
    return res.status(201).json({patient})
};

// create function to update a value based on it ID. 

 

const updatePatient = async (req, res, next) => {

    const id = req.params.id;

    const {name, dob, insurance, patient_id, discharged } = req.body;

    let patient;

    try{

        patient = await PatienSchema.findByIdAndUpdate(id, {

            name, 

            dob, 

            insurance, 

            patient_id, 

            discharged

        });

        patient = await patient.save();

    }catch(err){

        console.log(err);

    }

    if(!patient){

        return res.status(404).json({message: "Unable to update by this ID value"})

    }

    return res.status(200).json({patient});

};

//delete a car from your DB by creating a function to be assigned for your deleting URL

const deletePatient = async (req,res, next) => {

    const id = req.params.id;

    let patient;

    try{

        patient = await PatienSchema.findByIdAndDelete(id);

    } catch(err){

        console.log(err);

    }

    if(!patient){

        return res.status(404).json({ message: "Unable to Delete By This ID"});

    }

    return res.status(200).json({message: "Patient Successfully Deleted"})

};

 

//export functions to be used for URLS for functionality

 

exports.getAllPatients = getAllPatients;

exports.getById = getById;

exports.addPatient = addPatient;

exports.updatePatient = updatePatient;

exports.deletePatient  = deletePatient ;





