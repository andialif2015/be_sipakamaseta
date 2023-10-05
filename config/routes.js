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
//suketblmktp
router.post('/suketblmktp/buat', dokumenController.insertSuketBlmKtp);
//suketblmpunyarumah
router.post('/suketblmpunyarumah/buat', dokumenController.insertSuketBlmPunyaRumah);
//sptodesa
router.post('/sptodesa/buat', dokumenController.insertSpToDesa)
//superImunisasi
router.post('/superimunisasi/buat', dokumenController.insertSuperImunisasi)
//superUtangPiutang
router.post('/superUtangPiutang/buat', dokumenController.insertSuperUtangPiutang)
//suketjabatan
router.post("/suketjabatan/buat", dokumenController.insertSuketJabatan);
//suketdomisili
router.post("/suketdomisili/buat", dokumenController.insertSuketDomisili);
//suketGhoib
router.post("/suketghoib/buat", dokumenController.insertSuketGhoib);
//suketkehilanganstpd
router.post('/suketkehilanganstpd/buat', dokumenController.insertSuketKehilanganStpd);
//

module.exports = router;