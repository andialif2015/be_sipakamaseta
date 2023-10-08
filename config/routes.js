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
router.get('/spfromdesa/all', dokumenController.getAllSpfromdesa);
//suketwali
router.post('/suketwali/buat', dokumenController.insertSuketWali)
router.get("/suketwali/all", dokumenController.getAllSuketwali);
//suketblmktp
router.post('/suketblmktp/buat', dokumenController.insertSuketBlmKtp);
router.get("/suketblmktp/all", dokumenController.getAllSuketBlmKtp);
//suketblmpunyarumah
router.post('/suketblmpunyarumah/buat', dokumenController.insertSuketBlmPunyaRumah);
router.get("/suketblmpunyarumah/all", dokumenController.getAllSuketBlmPunyaRumah);
//sptodesa
router.post('/sptodesa/buat', dokumenController.insertSpToDesa)
router.get("/sptodesa/all", dokumenController.getAllSpToDesa);
//superImunisasi
router.post('/superimunisasi/buat', dokumenController.insertSuperImunisasi)
router.get("/superimunisasi/all", dokumenController.getAllSuperImunisasi);
//superUtangPiutang
router.post('/superUtangPiutang/buat', dokumenController.insertSuperUtangPiutang)
router.get("/superUtangPiutang/all", dokumenController.getAllSuperUtangPiutang);
//suketjabatan
router.post("/suketjabatan/buat", dokumenController.insertSuketJabatan);
router.get("/suketjabatan/all", dokumenController.getAllSuketJabatan);
//suketdomisili
router.post("/suketdomisili/buat", dokumenController.insertSuketDomisili);
router.get("/suketdomisili/all", dokumenController.getAllSuketDomisili);
//suketGhoib
router.post("/suketghoib/buat", dokumenController.insertSuketGhoib);
router.get("/suketghoib/all", dokumenController.getAllSuketGhoib);
//suketkehilanganstpd
router.post('/suketkehilanganstpd/buat', dokumenController.insertSuketKehilanganStpd);
router.get("/suketkehilanganstpd/all", dokumenController.getAllSuketKehilanganStpd);
//suketkehinlangankk
router.post('/suketkehilangankk/buat', dokumenController.insertSuketKehilanganKK);
router.get("/suketkehilangankk/all", dokumenController.getAllSuketKehilanganKK);
//suketkekerabatan
router.post('/suketkekerabatan/buat', dokumenController.insertSuketKekerabatan);
router.get("/suketkekerabatan/all", dokumenController.getAllSuketKekerabatan);
//suketlahirdesa
router.post('/suketlahirdesa/buat', dokumenController.insertSuketLahirDesa);
router.get("/suketlahirdesa/all", dokumenController.getAllSuketLahirDesa);
//suketlokasitanah
router.post('/suketlokasitanah/buat', dokumenController.insertSuketLokasiTanah);
router.get("/suketlokasitanah/all", dokumenController.getAllSuketLokasiTanah);
//suketmenantu
router.post('/suketmenantu/data', dokumenController.insertSuketMenantu);
router.get("/suketmenantu/all", dokumenController.getAllSuketMenantu);
//suketpendudukliar
router.post('/suketpendudukliar/buat', dokumenController.insertSuketPendudukLiar);
router.get("/suketpendudukliar/all", dokumenController.getAllSuketPendudukLiar);
//suketpenegasanwil
router.post('/suketpenegasanwil/buat', dokumenController.insertSuketPenegasanWil);
router.get("/suketpenegasanwil/all", dokumenController.getAllSuketPenegasanWil);
//suketaktifperusahaan
router.post('/suketaktifperusahaan/buat', dokumenController.insertSuketAktifPerusahaan);
router.get("/suketaktifperusahaan/all", dokumenController.getAllSuketAktifPerusahaan);
//sukettelahmenikah
router.post('/sukettelahmenikah/buat', dokumenController.insertSuketTelahMenikah);
router.get("/sukettelahmenikah/all", dokumenController.getAllSuketTelahMenikah);
//suketpisahrumah
router.post('/suketpisahrumah/buat', dokumenController.insertSuketPisahRumah);
router.get("/suketpisahrumah/all", dokumenController.getAllSuketPisahRumah);
//suketpernyataanwaris
router.post('/suketpernyataanwaris/buat',dokumenController.insertSuketPernyataanWaris);
router.get("/suketpernyataanwaris/all", dokumenController.getAllSuketPernyataanWaris);
//suketpengurusanpbb
router.post('/suketpengurusanpbb/buat',dokumenController.insertSuketPengurusanPBB);
router.get("/suketpengurusanpbb/all", dokumenController.getAllSuketPengurusanPBB);
//suketpengurusankk
router.post('/suketpengurusankk/buat',dokumenController.insertSuketPengurusanKK);
router.get("/suketpengurusankk/all", dokumenController.getAllSuketPengurusanKK);

module.exports = router;