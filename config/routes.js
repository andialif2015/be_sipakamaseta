const express = require("express");
const router = express.Router();

const surveyController = require("../controllers/surveyControllers");
const testingController = require("../controllers/testingController");
const dokumenController = require('../controllers/dokumenControllers')

//testing
router.get('/test', testingController.coba);

//survey
router.post('/survey/buat', surveyController.buatSurvey);

//Dokumen
//spformdesa
router.post('/spfromdesa/buat', dokumenController.insertSpFromDesa)
//suketwali
router.post('/suketwali/buat', dokumenController.insertSuketWali)

module.exports = router;