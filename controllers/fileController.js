const {
  SpFromDesa,
  SuketWali,
  SuketBlmKtp,
  SuketBlmPunyaRumah,
  SpToDesa,
  SuperImunisasi,
  SuperUtangPiutang,
  SuketJabatan,
  SuketDomisili,
  SuketGhoib,
  SuketKehilanganStpd,
  SuketKehilanganKK,
  SuketKekerabatan,
  SuketLahirDesa,
  SuketLokasiTanah,
  SuketMenantu,
  SuketPendudukLiar,
  SuketPenegasanWil,
  SuketAktifPerusahaan,
  SuketUntukMenikah,
  SuketTelahMenikah,
  SuketPisahRumah,
  SuketPernyataanWaris,
  SuketPengurusanPBB,
  SuketPengurusanKK,
  Imbs,
} = require("../models");

const path = require("path");
const fs = require("fs");

exports.downloadFile = async (req, res) => {
  try {
    const file = req.query.filename;
    const form = req.query.form;

    const pathFile = path.join(__dirname, "..", "public", "dokumen", `${file}`);
    const fileType =
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    if (fs.existsSync(pathFile)) {
      res.setHeader("Content-Disposition", `attachment; filename=${file}.docx`);
      res.setHeader("Content-Type", fileType);

      // update bahwa file telah di download
      if (form == "imbs") {
        await Imbs.update({ status: 1 }, { where: { fileName: file } });
      } else if (form == "suketJabatan") {
        await SuketJabatan.update({ status: 1 }, { where: { fileName: file } });
      } else if (form == "suketDomisili") {
        await SuketDomisili.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuketKehilanganStpd") {
        await SuketKehilanganStpd.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuketKehilanganKK") {
        await SuketKehilanganKK.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuketKekerabatan") {
        await SuketKekerabatan.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuketLahirDesa") {
        await SuketLahirDesa.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuketLokasiTanah") {
        await SuketLokasiTanah.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuketMenantu") {
        await SuketMenantu.update({ status: 1 }, { where: { fileName: file } });
      } else if (form == "SuketPendudukLiar") {
        await SuketPendudukLiar.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuketPenegasanWil") {
        await SuketPenegasanWil.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuketBlmKtp") {
        await SuketBlmKtp.update({ status: 1 }, { where: { fileName: file } });
      } else if (form == "SuketAktifPerusahaan") {
        await SuketAktifPerusahaan.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuperUtangPiutang") {
        await SuperUtangPiutang.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuperImunisasi") {
        await SuperImunisasi.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SpFromDesa") {
        await SpFromDesa.update({ status: 1 }, { where: { fileName: file } });
      } else if (form == "SpToDesa") {
        await SpToDesa.update({ status: 1 }, { where: { fileName: file } });
      } else if (form == "SuketWali") {
        await SuketWali.update({ status: 1 }, { where: { fileName: file } });
      } else if (form == "SuketTelahMenikah") {
        await SuketTelahMenikah.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuketPernyataanWaris") {
        await SuketPernyataanWaris.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      } else if (form == "SuketPengurusanPBB") {
        await SuketPengurusanPBB.update(
          { status: 1 },
          { where: { fileName: file } }
        );
      }

      // Stream the file to the response
      const fileStream = fs.createReadStream(pathFile);
      fileStream.pipe(res);
    } else {
      return res.status(404).json({
        status: false,
        msg: "File not found",
      });
    }
  } catch (error) {
    console.error(
      "Error while fetching SuketPengurusanKK data:",
      error.message
    );
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};
