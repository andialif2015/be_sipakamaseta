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
  SuratDomisiliLembaga,
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
      error: error.message,
    });
  }
};

exports.getAllSpfromdesa = async (req, res) => {
  try {
    const data = await SpFromDesa.findAll();

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
      data: data,
    });
  } catch (error) {
    console.error("Error while inserting data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSpfromdesa = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SpFromDesa", postId);

    const result = await SpFromDesa.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketwali = async (req, res) => {
  try {
    const data = await SuketWali.findAll();

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
      data: data,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketwali = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketWali", postId);

    const result = await SuketWali.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketBlmKtp = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

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

exports.getAllSuketBlmKtp = async (req, res) => {
  try {
    const records = await SuketBlmKtp.findAll(); // Retrieve all records from the SuketBlmKtp table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketBlmKtp = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketBlmKtp", postId);

    const result = await SuketBlmKtp.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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
    console.error("Error while inserting data:", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.getAllSuketBlmPunyaRumah = async (req, res) => {
  try {
    const records = await SuketBlmPunyaRumah.findAll(); // Retrieve all records from the SuketBlmPunyaRumah table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketBlmPunyaRumah = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketBlmPunyaRumah", postId);

    const result = await SuketBlmPunyaRumah.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSpToDesa = async (req, res) => {
  try {
    const records = await SpToDesa.findAll(); // Retrieve all records from the SpToDesa table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSpToDesa = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SpToDesa", postId);

    const result = await SpToDesa.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuperImunisasi = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);
    const respInsert = await SuperImunisasi.create(data);
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

    await SuperImunisasi.update(
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

exports.getAllSuperImunisasi = async (req, res) => {
  try {
    const records = await SuperImunisasi.findAll(); // Retrieve all records from the SuperImunisasi table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuperImunisasi = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuperImunisasi", postId);

    const result = await SuperImunisasi.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuperUtangPiutang = async (req, res) => {
  try {
    const records = await SuperUtangPiutang.findAll(); // Retrieve all records from the SuperUtangPiutang table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuperUtangPiutang = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuperUtangPiutang", postId);

    const result = await SuperUtangPiutang.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketJabatan = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

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

exports.getAllSuketJabatan = async (req, res) => {
  try {
    const records = await SuketJabatan.findAll(); // Retrieve all records from the SuketJabatan table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketJabatan = async (req, res) => {
  try {
    const postId = req.params.id;

    const result = await SuketJabatan.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketDomisili = async (req, res) => {
  try {
    const records = await SuketDomisili.findAll(); // Retrieve all records from the SuketDomisili table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketGhoib = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);
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

exports.deleteSuketDomisili = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("post id", postId);

    const result = await SuketDomisili.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.getAllSuketGhoib = async (req, res) => {
  try {
    const records = await SuketGhoib.findAll(); // Retrieve all records from the SuketGhoib table

    console.log(records);

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
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

exports.getAllSuketKehilanganStpd = async (req, res) => {
  try {
    // Fetch all records from SuketKehilanganStpd table
    const suketKehilanganStpds = await SuketKehilanganStpd.findAll();

    return res.status(200).json({
      status: true,
      data: suketKehilanganStpds,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketKehilanganStpd = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("post id", postId);

    const result = await SuketKehilanganStpd.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketKehilanganKK = async (req, res) => {
  try {
    // Fetch all records from SuketKehilanganKK table
    const suketKehilanganKKs = await SuketKehilanganKK.findAll();

    return res.status(200).json({
      status: true,
      data: suketKehilanganKKs,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketKehilanganKK = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("suketkk", postId);

    const result = await SuketKehilanganKK.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketKekerabatan = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

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

exports.getAllSuketKekerabatan = async (req, res) => {
  try {
    // Fetch all records from SuketKekerabatan table
    const suketKekerabatans = await SuketKekerabatan.findAll();

    return res.status(200).json({
      status: true,
      data: suketKekerabatans,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSUketKekerabatan = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("suket kekerabatan", postId);

    const result = await SuketKekerabatan.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketLahirDesa = async (req, res) => {
  try {
    // Fetch all records from SuketLahirDesa table
    const suketLahirDesas = await SuketLahirDesa.findAll();

    return res.status(200).json({
      status: true,
      data: suketLahirDesas,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketLahirDesa = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("suket Lahir Desa", postId);

    const result = await SuketLahirDesa.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketLokasiTanah = async (req, res) => {
  try {
    // Fetch all records from SuketLokasiTanah table
    const suketLokasiTanahs = await SuketLokasiTanah.findAll();

    return res.status(200).json({
      status: true,
      data: suketLokasiTanahs,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketLokasiTanah = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketLokasiTanah", postId);

    const result = await SuketLokasiTanah.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketMenantu = async (req, res) => {
  try {
    // Fetch all records from SuketMenantu table
    const suketMenantus = await SuketMenantu.findAll();

    return res.status(200).json({
      status: true,
      data: suketMenantus,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketMenantu = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketMenantu", postId);

    const result = await SuketMenantu.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketPendudukLiar = async (req, res) => {
  try {
    // Fetch all records from SuketPendudukLiar table
    const suketPendudukLiars = await SuketPendudukLiar.findAll();

    return res.status(200).json({
      status: true,
      data: suketPendudukLiars,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketPendudukLiar = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketPendudukLiar", postId);

    const result = await SuketPendudukLiar.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketPenegasanWil = async (req, res) => {
  try {
    // Fetch all records from SuketPenegasanWil table
    const suketPenegasanWils = await SuketPenegasanWil.findAll();

    return res.status(200).json({
      status: true,
      data: suketPenegasanWils,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketPenegasanWil = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketPenegasanWil", postId);

    const result = await SuketPenegasanWil.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketAktifPerusahaan = async (req, res) => {
  try {
    // Fetch all records from SuketAktifPerusahaan table
    const suketAktifPerusahaans = await SuketAktifPerusahaan.findAll();

    return res.status(200).json({
      status: true,
      data: suketAktifPerusahaans,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketAktifPerusahaan = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketAktifPerusahaan", postId);

    const result = await SuketAktifPerusahaan.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketUntukMenikah = async (req, res) => {
  try {
    // Fetch all records from SuketUntukMenikah table
    const suketUntukMenikahs = await SuketUntukMenikah.findAll();

    return res.status(200).json({
      status: true,
      data: suketUntukMenikahs,
    });
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketTelahMenikah = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

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

exports.getAllSuketTelahMenikah = async (req, res) => {
  try {
    // Fetch all records from SuketTelahMenikah table
    const suketTelahMenikahs = await SuketTelahMenikah.findAll();

    return res.status(200).json({
      status: true,
      data: suketTelahMenikahs,
    });
  } catch (error) {
    console.error(
      "Error while fetching SuketTelahMenikah data:",
      error.message
    );
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketTelahMenikah = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketTelahMenikah", postId);

    const result = await SuketTelahMenikah.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketPisahRumah = async (req, res) => {
  try {
    // Fetch all records from SuketPisahRumah table
    const suketPisahRumahs = await SuketPisahRumah.findAll();

    return res.status(200).json({
      status: true,
      data: suketPisahRumahs,
    });
  } catch (error) {
    console.error("Error while fetching SuketPisahRumah data:", error.message);
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

exports.getAllSuketPernyataanWaris = async (req, res) => {
  try {
    // Fetch all records from SuketPernyataanWaris table
    const suketPernyataanWaris = await SuketPernyataanWaris.findAll();

    return res.status(200).json({
      status: true,
      data: suketPernyataanWaris,
    });
  } catch (error) {
    console.error(
      "Error while fetching SuketPernyataanWaris data:",
      error.message
    );
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketPernyataanWaris = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketPernyataanWaris", postId);

    const result = await SuketPernyataanWaris.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
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

exports.getAllSuketPengurusanPBB = async (req, res) => {
  try {
    // Fetch all records from SuketPengurusanPBB table
    const suketPengurusanPBBs = await SuketPengurusanPBB.findAll();

    return res.status(200).json({
      status: true,
      data: suketPengurusanPBBs,
    });
  } catch (error) {
    console.error(
      "Error while fetching SuketPengurusanPBB data:",
      error.message
    );
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteSuketPengurusanPBB = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketPengurusanPBB", postId);

    const result = await SuketPengurusanPBB.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuketPengurusanKK = async (req, res) => {
  try {
    const data = req.body;

    // console.log(data);
    // return
    const respInsert = await SuketPengurusanKK.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketpengurusankk.docx"
    );

    const namaFile = await docxTemplate.generate(
      data,
      pathTemplate,
      "suketpengurusankk"
    );

    const respData = respInsert.toJSON();

    await SuketPengurusanKK.update(
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

exports.getAllSuketPengurusanKK = async (req, res) => {
  try {
    // Fetch all records from SuketPengurusanKK table
    const suketPengurusanKKs = await SuketPengurusanKK.findAll();

    return res.status(200).json({
      status: true,
      data: suketPengurusanKKs,
    });
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

exports.deleteSuketPengurusanKK = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("SuketPengurusanKK", postId);

    const result = await SuketPengurusanKK.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertImbs = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await Imbs.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_imbs.docx"
    );
    const namaFile = await docxTemplate.generate(data, pathTemplate, "imbs");

    const respData = respInsert.toJSON();

    await Imbs.update(
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

exports.getAllImbs = async (req, res) => {
  try {
    const imbsData = await Imbs.findAll(); // Assuming you have an Imbs model defined

    return res.status(200).json({
      status: true,
      data: imbsData, // Return the data retrieved from the database
    });
  } catch (error) {
    console.error("Error while retrieving data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteImbs = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log("post id", postId);

    const result = await Imbs.destroy({
      where: {
        id: postId,
      },
    });

    if (result === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.insertSuratDomisiliLembaga = async (req, res) => {
  try {
    const data = req.body;

    const respInsert = await SuratDomisiliLembaga.create(data);
    // const pathTemplate = path.join(
    //   __dirname,
    //   "..",
    //   "public",
    //   "templates",
    //   "temp_imbs.docx"
    // );
    // const namaFile = await docxTemplate.generate(data, pathTemplate, "imbs");

    // const respData = respInsert.toJSON();

    // await Imbs.update(
    //   {
    //     fileName: namaFile,
    //   },
    //   {
    //     where: {
    //       id: respData.id,
    //     },
    //   }
    // );

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
}

exports.getAllSuratDomisiliLembaga = async (req, res) => {
  return res.status(200).json({
    status: true,
    msg: "Berhasil",
  });
}
exports.deleteSuratDomisiliLembaga = async (req, res) => {
  return res.status(200).json({
    status: true,
    msg: "Berhasil",
  });
}