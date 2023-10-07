const {
  SpFromDesa,
  SuketWali,
  SuketBlmKtp,
  SuketBlmPunyaRumah,
  SpToDesa,
  SuperImunasasi,
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
} = require("../models");
const docxTemplate = require("../utils/docxTemplater");
const path = require("path");

exports.insertSpFromDesa = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SpFromDesa.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_spDariDesa.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "spfromdesa"
    );
    const respData = respInsert.toJSON();

    await SpFromDesa.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketWali = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketWali.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketwaliortu.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketwali"
    );

    const respData = respInsert.toJSON();

    await SuketWali.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketBlmKtp = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketBlmKtp.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketblmktp.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketblmktp"
    );

    const respData = respInsert.toJSON();

    await SuketBlmKtp.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketBlmPunyaRumah = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketBlmPunyaRumah.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketblmpunyarumah.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketblmpunyarumah"
    );

    const respData = respInsert.toJSON();

    await SuketBlmPunyaRumah.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSpToDesa = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SpToDesa.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_sptodesa.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "sptodesa"
    );

    const respData = respInsert.toJSON();

    await SpToDesa.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuperImunisasi = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuperImunasasi.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_superimunisasi.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "superimunisasi"
    );

    const respData = respInsert.toJSON();

    await SuperImunasasi.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuperUtangPiutang = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuperUtangPiutang.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_superutangpiutang.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "superutangpiutang"
    );

    const respData = respInsert.toJSON();

    await SuperUtangPiutang.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketJabatan = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketJabatan.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketjabatan.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketjabatan"
    );

    const respData = respInsert.toJSON();

    await SuketJabatan.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketDomisili = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketDomisili.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketdomisili.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketdomisili"
    );

    const respData = respInsert.toJSON();

    await SuketDomisili.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketGhoib = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketGhoib.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketghoib.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketghoib"
    );

    const respData = respInsert.toJSON();

    await SuketGhoib.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketKehilanganStpd = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketKehilanganStpd.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketkehilanganstpd.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketkehilanganstpd"
    );

    const respData = respInsert.toJSON();

    await SuketKehilanganStpd.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketKehilanganKK = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketKehilanganKK.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketkehilangankk.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketkehilangankk"
    );

    const respData = respInsert.toJSON();

    await SuketKehilanganKK.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketKekerabatan = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketKekerabatan.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketkekerabatan.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketkekerabatan"
    );

    const respData = respInsert.toJSON();

    await SuketKekerabatan.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketLahirDesa = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketLahirDesa.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketlahirdesa.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketlahirdesa"
    );

    const respData = respInsert.toJSON();

    await SuketLahirDesa.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketLokasiTanah = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketLokasiTanah.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketlokasitanah.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketlokasitanah"
    );

    const respData = respInsert.toJSON();

    await SuketLokasiTanah.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketMenantu = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketMenantu.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketmenantu.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketmenantu"
    );

    const respData = respInsert.toJSON();

    await SuketMenantu.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketPendudukLiar = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketPendudukLiar.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketpendudukliar.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketpendudukliar"
    );

    const respData = respInsert.toJSON();

    await SuketPendudukLiar.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketPenegasanWil = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketPenegasanWil.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketpenegasanwil.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketpenegasanwil"
    );

    const respData = respInsert.toJSON();

    await SuketPenegasanWil.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketAktifPerusahaan = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketAktifPerusahaan.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketaktifperusahaan.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketaktifperusahaan"
    );

    const respData = respInsert.toJSON();

    await SuketAktifPerusahaan.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketUntukMenikah = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketUntukMenikah.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketuntukmenikah.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketuntukmenikah"
    );

    const respData = respInsert.toJSON();

    await SuketUntukMenikah.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketTelahMenikah = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketTelahMenikah.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_sukettelahmenikah.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "sukettelahmenikah"
    );

    const respData = respInsert.toJSON();

    await SuketTelahMenikah.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketPisahRumah = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketPisahRumah.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketpisahrumah.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketpisahrumah"
    );

    const respData = respInsert.toJSON();

    await SuketPisahRumah.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketPernyataanWaris = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketPernyataanWaris.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketpernyataanwaris.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketpernyataanwaris"
    );

    const respData = respInsert.toJSON();

    await SuketPernyataanWaris.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketPengurusanPBB = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuketPengurusanPBB.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketpengurusanpbb.docx"
    );
    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketpengurusanpbb"
    );

    const respData = respInsert.toJSON();

    await SuketPengurusanPBB.update(
      {
        fileName: namaFile,
      },
      {
        where: {
          id: respData.id,
        },
      }
    );

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};







