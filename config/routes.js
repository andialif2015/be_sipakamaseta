const express = require("express");
const router = express.Router();
const path = require("path");

const surveyController = require("../controllers/surveyControllers");
const testingController = require("../controllers/testingController");
const dokumenController = require("../controllers/dokumenControllers");
const fileController = require("../controllers/fileController");
const storeController = require("../controllers/storeController");

//testing
router.get("/test", testingController.coba);

//survey
router.post("/survey/buat", surveyController.buatSurvey);
router.get("/survey/all", surveyController.getAllSurvey);

//Dokumen
//spformdesa
router.post("/spfromdesa/buat", dokumenController.insertSpFromDesa);
router.get("/spfromdesa/all", dokumenController.getAllSpfromdesa);
router.delete("/spfromdesa/delete/:id", dokumenController.deleteSpfromdesa);
//suketwali
router.post("/suketwali/buat", dokumenController.insertSuketWali);
router.get("/suketwali/all", dokumenController.getAllSuketwali);
router.delete("/suketwali/delete/:id", dokumenController.deleteSuketwali);
//suketblmktp
router.post("/suketblmktp/buat", dokumenController.insertSuketBlmKtp);
router.get("/suketblmktp/all", dokumenController.getAllSuketBlmKtp);
router.delete("/suketblmktp/delete/:id", dokumenController.deleteSuketBlmKtp);
//suketblmpunyarumah
router.post(
  "/suketblmpunyarumah/buat",
  dokumenController.insertSuketBlmPunyaRumah
);
router.get(
  "/suketblmpunyarumah/all",
  dokumenController.getAllSuketBlmPunyaRumah
);
//sptodesa
router.post("/sptodesa/buat", dokumenController.insertSpToDesa);
router.get("/sptodesa/all", dokumenController.getAllSpToDesa);
router.delete("/sptodesa/delete/:id", dokumenController.deleteSpToDesa);
//superImunisasi
router.post("/superimunisasi/buat", dokumenController.insertSuperImunisasi);
router.get("/superimunisasi/all", dokumenController.getAllSuperImunisasi);
router.delete(
  "/superimunisasi/delete/:id",
  dokumenController.deleteSuperImunisasi
);
//superUtangPiutang
router.post(
  "/superUtangPiutang/buat",
  dokumenController.insertSuperUtangPiutang
);
router.get("/superUtangPiutang/all", dokumenController.getAllSuperUtangPiutang);
router.delete(
  "/superUtangPiutang/delete/:id",
  dokumenController.deleteSuperUtangPiutang
);
//suketjabatan
router.post("/suketjabatan/buat", dokumenController.insertSuketJabatan);
router.get("/suketjabatan/all", dokumenController.getAllSuketJabatan);
router.delete("/suketjabatan/delete/:id", dokumenController.deleteSuketJabatan);
//suketdomisili
router.post("/suketdomisili/buat", dokumenController.insertSuketDomisili);
router.get("/suketdomisili/all", dokumenController.getAllSuketDomisili);
router.delete(
  "/suketdomisili/delete/:id",
  dokumenController.deleteSuketDomisili
);
//suketGhoib
router.post("/suketghoib/buat", dokumenController.insertSuketGhoib);
router.get("/suketghoib/all", dokumenController.getAllSuketGhoib);
//suketkehilanganstpd
router.post(
  "/suketkehilanganstpd/buat",
  dokumenController.insertSuketKehilanganStpd
);
router.get(
  "/suketkehilanganstpd/all",
  dokumenController.getAllSuketKehilanganStpd
);
router.delete(
  "/suketkehilanganstpd/delete/:id",
  dokumenController.deleteSuketKehilanganStpd
);
//suketkehinlangankk
router.post(
  "/suketkehilangankk/buat",
  dokumenController.insertSuketKehilanganKK
);
router.get("/suketkehilangankk/all", dokumenController.getAllSuketKehilanganKK);
router.delete(
  "/suketkehilangankk/delete/:id",
  dokumenController.deleteSuketKehilanganKK
);
//suketkekerabatan
router.post("/suketkekerabatan/buat", dokumenController.insertSuketKekerabatan);
router.get("/suketkekerabatan/all", dokumenController.getAllSuketKekerabatan);
router.delete(
  "/suketkekerabatan/delete/:id",
  dokumenController.deleteSUketKekerabatan
);
//suketlahirdesa
router.post("/suketlahirdesa/buat", dokumenController.insertSuketLahirDesa);
router.get("/suketlahirdesa/all", dokumenController.getAllSuketLahirDesa);
router.delete(
  "/suketlahirdesa/delete/:id",
  dokumenController.deleteSuketLahirDesa
);
//suketlokasitanah
router.post("/suketlokasitanah/buat", dokumenController.insertSuketLokasiTanah);
router.get("/suketlokasitanah/all", dokumenController.getAllSuketLokasiTanah);
router.delete(
  "/suketlokasitanah/delete/:id",
  dokumenController.deleteSuketLokasiTanah
);
//suketmenantu
router.post("/suketmenantu/buat", dokumenController.insertSuketMenantu);
router.get("/suketmenantu/all", dokumenController.getAllSuketMenantu);
router.delete("/suketmenantu/delete/:id", dokumenController.deleteSuketMenantu);
//suketpendudukliar
router.post(
  "/suketpendudukliar/buat",
  dokumenController.insertSuketPendudukLiar
);
router.get("/suketpendudukliar/all", dokumenController.getAllSuketPendudukLiar);
router.delete(
  "/suketpendudukliar/delete/:id",
  dokumenController.deleteSuketPendudukLiar
);
//suketpenegasanwil
router.post(
  "/suketpenegasanwil/buat",
  dokumenController.insertSuketPenegasanWil
);
router.get("/suketpenegasanwil/all", dokumenController.getAllSuketPenegasanWil);
router.delete(
  "/suketpenegasanwil/delete/:id",
  dokumenController.deleteSuketPenegasanWil
);
//suketaktifperusahaan
router.post(
  "/suketaktifperusahaan/buat",
  dokumenController.insertSuketAktifPerusahaan
);
router.get(
  "/suketaktifperusahaan/all",
  dokumenController.getAllSuketAktifPerusahaan
);
router.delete(
  "/suketaktifperusahaan/delete/:id",
  dokumenController.deleteSuketAktifPerusahaan
);
//sukettelahmenikah
router.post(
  "/sukettelahmenikah/buat",
  dokumenController.insertSuketTelahMenikah
);
router.get("/sukettelahmenikah/all", dokumenController.getAllSuketTelahMenikah);
router.delete(
  "/sukettelahmenikah/delete/:id",
  dokumenController.deleteSuketTelahMenikah
);
//suketpisahrumah
router.post("/suketpisahrumah/buat", dokumenController.insertSuketPisahRumah);
router.get("/suketpisahrumah/all", dokumenController.getAllSuketPisahRumah);
//suketpernyataanwaris
router.post(
  "/suketpernyataanwaris/buat",
  dokumenController.insertSuketPernyataanWaris
);
router.get(
  "/suketpernyataanwaris/all",
  dokumenController.getAllSuketPernyataanWaris
);
router.delete(
  "/suketpernyataanwaris/delete/:id",
  dokumenController.deleteSuketPernyataanWaris
);
//suketpengurusanpbb
router.post(
  "/suketpengurusanpbb/buat",
  dokumenController.insertSuketPengurusanPBB
);
router.get(
  "/suketpengurusanpbb/all",
  dokumenController.getAllSuketPengurusanPBB
);
router.delete(
  "/suketpengurusanpbb/delete/:id",
  dokumenController.deleteSuketPengurusanPBB
);
//suketpengurusankk
router.post(
  "/suketpengurusankk/buat",
  dokumenController.insertSuketPengurusanKK
);
router.get("/suketpengurusankk/all", dokumenController.getAllSuketPengurusanKK);
//imbs
router.post("/imbs/buat", dokumenController.insertImbs);
router.get("/imbs/all", dokumenController.getAllImbs);
router.delete("/imbs/delete/:id", dokumenController.deleteImbs);

router.get("/download", fileController.downloadFile);

//store
router.post("/post/buat", storeController.insertPost);
router.get("/post/all", storeController.getAllPosts);
router.delete("/post/delete/:id", storeController.deletePostById);
router.put("/post/publish/:id", storeController.pubslishPost);
router.put("/post/unpublish/:id", storeController.unPubslishPost);

module.exports = router;
