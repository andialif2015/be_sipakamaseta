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
  SuketUsaha,
  SuketBedaData,
  SuketCatatanKepolisian,
  SuketKematian,
  Survey
} = require("../models");
const docxTemplate = require("../utils/docxTemplater");
const path = require("path");

exports.listData = async (req, res, next) => {
  try {
    let data = [
      { id: 0, name: 'Surat Izin Membangun Sementara', to: '/admin/imbS', jumlah: await Imbs.count({ where: { status: 0 } }) },
      { id: 1, name: 'Surat Pengantar dari Kantor Desa', to: '/admin/spDariDesa', jumlah: await SpFromDesa.count({ where: { status: 0 } }) },
      { id: 2, name: 'Surat Pengantar ke Kantor Desa', to: '/admin/spkedesa', jumlah: await SpToDesa.count({ where: { status: 0 } }) },
      { id: 3, name: 'Surat Keterangan Aktif Perusahaan', to: '/admin/suketaktifperusahaan', jumlah: await SuketAktifPerusahaan.count({ where: { status: 0 } }) },
      { id: 4, name: 'Surat Keterangan Belum Memiliki Rumah', to: '/admin/suketbelumpunyarumah', jumlah: await SuketBlmPunyaRumah.count({ where: { status: 0 } }) },
      { id: 5, name: 'Surat Keterangan Belum Terbit E-KTP', to: '/admin/suketblmktp', jumlah: await SuketBlmKtp.count({ where: { status: 0 } }) },
      { id: 6, name: 'Surat Keterangan Domisili', to: '/admin/suketdomisili', jumlah: await SuketDomisili.count({ where: { status: 0 } }) },
      { id: 7, name: 'Surat Keterangan Ghoib', to: '/admin/suketghoib', jumlah: await SuketGhoib.count({ where: { status: 0 } }) },
      { id: 8, name: 'Surat Keterangan Jabatan', to: '/admin/suketjabatan', jumlah: await SuketJabatan.count({ where: { status: 0 } }) },
      { id: 9, name: 'Surat Keterangan Kehilangan Kartu Keluarga', to: '/admin/suketkehilangankk', jumlah: await SuketKehilanganKK.count({ where: { status: 0 } }) },
      { id: 10, name: 'Surat Keterangan Kehilangan STPD', to: '/admin/suketkehilanganstpd', jumlah: await SuketKehilanganStpd.count({ where: { status: 0 } }) },
      { id: 11, name: 'Surat Keterangan Kekerabatan Anak Kandung', to: '/admin/suketkekerabatan', jumlah: await SuketKekerabatan.count({ where: { status: 0 } }) },
      { id: 12, name: 'Surat Keterangan Lahir Desa', to: '/admin/suketlahirdesa', jumlah: await SuketLahirDesa.count({ where: { status: 0 } }) },
      { id: 13, name: 'Surat Keterangan Lokasi Tanah', to: '/admin/suketlokasitanah', jumlah: await SuketLokasiTanah.count({ where: { status: 0 } }) },
      { id: 14, name: 'Surat Keterangan Menantu', to: '/admin/suketmenantu', jumlah: await SuketMenantu.count({ where: { status: 0 } }) },
      { id: 15, name: 'Surat Keterangan Penduduk Liar', to: '/admin/suketpendudukliar', jumlah: await SuketPendudukLiar.count({ where: { status: 0 } }) },
      { id: 16, name: 'Surat Keterangan Penegasan Wilayah', to: '/admin/suketpenegasanwil', jumlah: await SuketPenegasanWil.count({ where: { status: 0 } }) },
      { id: 17, name: 'Surat Keterangan Pengurusan PBB', to: '/admin/suketpengurusanpbb', jumlah: await SuketPengurusanPBB.count({ where: { status: 0 } }) },
      { id: 18, name: 'Surat Keterangan Pernyataan Waris', to: '/admin/suketpernyataanwaris', jumlah: await SuketPernyataanWaris.count({ where: { status: 0 } }) },
      { id: 19, name: 'Surat Keterangan Pisah Rumah', to: '/admin/suketpisahrumah', jumlah: await SuketPisahRumah.count({ where: { status: 0 } }) },
      // { id: 20, name: 'Surat Keterangan Taksiran Tanah', to: '/admin/sukettaksirantanah', jumlah: await .count({ where: { status: 0 } }) },
      // { id: 21, name: 'Surat Keterangan Tanah', to: '/admin/sukettanah', jumlah: await tanah.count({ where: { status: 0 } }) },
      // { id: 22, name: 'Surat Keterangan Tanah Belum Pernah Diperjualbelikan', to: '/admin/sukettbpd', jumlah: await SpFromDesa.count({ where: { status: 0 } }) },
      { id: 23, name: 'Surat Keterangan Telah Menikah', to: '/admin/suketTelahMenikah', jumlah: await SuketTelahMenikah.count({ where: { status: 0 } }) },
      { id: 24, name: 'Surat Keterangan Untuk Nikah', to: '/admin/suketuntuknikah', jumlah: await SuketUntukMenikah.count({ where: { status: 0 } }) },
      { id: 25, name: 'Surat Keterangan Pengurusan Kartu Keluarga', to: '/admin/suketuruskk', jumlah: await SuketPengurusanKK.count({ where: { status: 0 } }) },
      { id: 26, name: 'Surat Keterangan Wali Orang Tua', to: '/admin/suketwaliortu', jumlah: await SuketWali.count({ where: { status: 0 } }) },
      { id: 27, name: 'Surat Pengantar Imunisasi', to: '/admin/superimunisasi', jumlah: await SuperImunisasi.count({ where: { status: 0 } }) },
      { id: 28, name: 'Surat Perjanjian Utang Piutang', to: '/admin/superutangpiutang', jumlah: await SuperUtangPiutang.count({ where: { status: 0 } }) },
      { id: 29, name: 'Surat Domisili Lembaga', to: '/admin/suratdomisililembaga', jumlah: await SuratDomisiliLembaga.count({ where: { status: 0 } }) },
      { id: 30, name: 'Surat Keterangan Usaha', to: '/admin/suketusaha', jumlah: await SuketUsaha.count({ where: { status: 0 } }) },
      { id: 31, name: 'Surat Keterangan Beda Tanggal Lahir/Beda Data', to: '/admin/suketbedadata', jumlah: await SuketBedaData.count({ where: { status: 0 } }) },
      { id: 32, name: 'Surat Pengantar Keterangan Catatan Kepolisian', to: '/admin/suketcatatankepolisian', jumlah: await SuketCatatanKepolisian.count({ where: { status: 0 } }) },
      { id: 33, name: 'Surat Keterangan Kematian', to: '/admin/suketkematian', jumlah: await SuketKematian.count({ where: { status: 0 } }) },
      { id: 34, name: 'Survey', to: '/admin/survey', jumlah: await Survey.count() }
    ]
    return res.status(200).json({
      status: true,
      msg: 'sukses',
      data: data
    });
  } catch (error) {
    next(error);
  }
}

exports.insertSpFromDesa = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSpfromdesa = async (req, res, next) => {
  try {
    const data = await SpFromDesa.findAll();

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSpfromdesa = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketWali = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketwali = async (req, res, next) => {
  try {
    const data = await SuketWali.findAll();

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketwali = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketBlmKtp = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketBlmKtp = async (req, res, next) => {
  try {
    const records = await SuketBlmKtp.findAll(); // Retrieve all records from the SuketBlmKtp table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketBlmKtp = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketBlmPunyaRumah = async (req, res, next) => {
  try {
    const data = req.body;

    // console.log(data);
    // return;

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
    next(error);
  }
};

exports.getAllSuketBlmPunyaRumah = async (req, res, next) => {
  try {
    const records = await SuketBlmPunyaRumah.findAll(); // Retrieve all records from the SuketBlmPunyaRumah table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketBlmPunyaRumah = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSpToDesa = async (req, res, next) => {
  try {
    const data = req.body;

    console.log(data);

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
    next(error);
  }
};

exports.getAllSpToDesa = async (req, res, next) => {
  try {
    const records = await SpToDesa.findAll(); // Retrieve all records from the SpToDesa table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSpToDesa = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuperImunisasi = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuperImunisasi = async (req, res, next) => {
  try {
    const records = await SuperImunisasi.findAll(); // Retrieve all records from the SuperImunisasi table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuperImunisasi = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuperUtangPiutang = async (req, res, next) => {
  try {
    const data = req.body;

    console.log(data);

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
    next(error);
  }
};

exports.getAllSuperUtangPiutang = async (req, res, next) => {
  try {
    const records = await SuperUtangPiutang.findAll(); // Retrieve all records from the SuperUtangPiutang table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuperUtangPiutang = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketJabatan = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketJabatan = async (req, res, next) => {
  try {
    const records = await SuketJabatan.findAll(); // Retrieve all records from the SuketJabatan table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketJabatan = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketDomisili = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketDomisili = async (req, res, next) => {
  try {
    const records = await SuketDomisili.findAll(); // Retrieve all records from the SuketDomisili table

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    next(error);
  }
};

exports.insertSuketGhoib = async (req, res, next) => {
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
    next(error);
  }
};

exports.deleteSuketDomisili = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketGhoib = async (req, res, next) => {
  try {
    const records = await SuketGhoib.findAll(); // Retrieve all records from the SuketGhoib table

    console.log(records);

    return res.status(200).json({
      status: true,
      data: records, // Send the records as JSON response
    });
  } catch (error) {
    next(error);
  }
};

exports.insertSuketKehilanganStpd = async (req, res, next) => {
  try {
    const data = req.body;

    console.log(data);

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
    next(error);
  }
};

exports.getAllSuketKehilanganStpd = async (req, res, next) => {
  try {
    // Fetch all records from SuketKehilanganStpd table
    const suketKehilanganStpds = await SuketKehilanganStpd.findAll();

    return res.status(200).json({
      status: true,
      data: suketKehilanganStpds,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketKehilanganStpd = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketKehilanganKK = async (req, res, next) => {
  try {
    const data = req.body;

    console.log(data);

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
    next(error);
  }
};

exports.getAllSuketKehilanganKK = async (req, res, next) => {
  try {
    // Fetch all records from SuketKehilanganKK table
    const suketKehilanganKKs = await SuketKehilanganKK.findAll();

    return res.status(200).json({
      status: true,
      data: suketKehilanganKKs,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketKehilanganKK = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketKekerabatan = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketKekerabatan = async (req, res, next) => {
  try {
    // Fetch all records from SuketKekerabatan table
    const suketKekerabatans = await SuketKekerabatan.findAll();

    return res.status(200).json({
      status: true,
      data: suketKekerabatans,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSUketKekerabatan = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketLahirDesa = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketLahirDesa = async (req, res, next) => {
  try {
    // Fetch all records from SuketLahirDesa table
    const suketLahirDesas = await SuketLahirDesa.findAll();

    return res.status(200).json({
      status: true,
      data: suketLahirDesas,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketLahirDesa = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketLokasiTanah = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketLokasiTanah = async (req, res, next) => {
  try {
    // Fetch all records from SuketLokasiTanah table
    const suketLokasiTanahs = await SuketLokasiTanah.findAll();

    return res.status(200).json({
      status: true,
      data: suketLokasiTanahs,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketLokasiTanah = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketMenantu = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketMenantu = async (req, res, next) => {
  try {
    // Fetch all records from SuketMenantu table
    const suketMenantus = await SuketMenantu.findAll();

    return res.status(200).json({
      status: true,
      data: suketMenantus,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketMenantu = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketPendudukLiar = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketPendudukLiar = async (req, res, next) => {
  try {
    // Fetch all records from SuketPendudukLiar table
    const suketPendudukLiars = await SuketPendudukLiar.findAll();

    return res.status(200).json({
      status: true,
      data: suketPendudukLiars,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketPendudukLiar = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketPenegasanWil = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketPenegasanWil = async (req, res, next) => {
  try {
    // Fetch all records from SuketPenegasanWil table
    const suketPenegasanWils = await SuketPenegasanWil.findAll();

    return res.status(200).json({
      status: true,
      data: suketPenegasanWils,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketPenegasanWil = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketAktifPerusahaan = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketAktifPerusahaan = async (req, res, next) => {
  try {
    // Fetch all records from SuketAktifPerusahaan table
    const suketAktifPerusahaans = await SuketAktifPerusahaan.findAll();

    return res.status(200).json({
      status: true,
      data: suketAktifPerusahaans,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketAktifPerusahaan = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketUntukMenikah = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketUntukMenikah = async (req, res, next) => {
  try {
    // Fetch all records from SuketUntukMenikah table
    const suketUntukMenikahs = await SuketUntukMenikah.findAll();

    return res.status(200).json({
      status: true,
      data: suketUntukMenikahs,
    });
  } catch (error) {
    next(error);
  }
};

exports.insertSuketTelahMenikah = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketTelahMenikah = async (req, res, next) => {
  try {
    // Fetch all records from SuketTelahMenikah table
    const suketTelahMenikahs = await SuketTelahMenikah.findAll();

    return res.status(200).json({
      status: true,
      data: suketTelahMenikahs,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketTelahMenikah = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketPisahRumah = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketPisahRumah = async (req, res, next) => {
  try {
    // Fetch all records from SuketPisahRumah table
    const suketPisahRumahs = await SuketPisahRumah.findAll();

    return res.status(200).json({
      status: true,
      data: suketPisahRumahs,
    });
  } catch (error) {
    next(error);
  }
};

exports.insertSuketPernyataanWaris = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketPernyataanWaris = async (req, res, next) => {
  try {
    // Fetch all records from SuketPernyataanWaris table
    const suketPernyataanWaris = await SuketPernyataanWaris.findAll();

    return res.status(200).json({
      status: true,
      data: suketPernyataanWaris,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketPernyataanWaris = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketPengurusanPBB = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketPengurusanPBB = async (req, res, next) => {
  try {
    // Fetch all records from SuketPengurusanPBB table
    const suketPengurusanPBBs = await SuketPengurusanPBB.findAll();

    return res.status(200).json({
      status: true,
      data: suketPengurusanPBBs,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketPengurusanPBB = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuketPengurusanKK = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllSuketPengurusanKK = async (req, res, next) => {
  try {
    // Fetch all records from SuketPengurusanKK table
    const suketPengurusanKKs = await SuketPengurusanKK.findAll();

    return res.status(200).json({
      status: true,
      data: suketPengurusanKKs,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSuketPengurusanKK = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertImbs = async (req, res, next) => {
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
    next(error);
  }
};

exports.getAllImbs = async (req, res, next) => {
  try {
    const imbsData = await Imbs.findAll(); // Assuming you have an Imbs model defined

    return res.status(200).json({
      status: true,
      data: imbsData, // Return the data retrieved from the database
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteImbs = async (req, res, next) => {
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
    next(error);
  }
};

exports.insertSuratDomisiliLembaga = async (req, res, next) => {
  try {
    const data = req.body;

    console.log(data);
    const respInsert = await SuratDomisiliLembaga.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suratdomisililembaga.docx"
    );
    const namaFile = await docxTemplate.generate(data, pathTemplate, "suratdomisililembaga");

    const respData = respInsert.toJSON();

    await SuratDomisiliLembaga.update(
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
    next(error);
  }
}

exports.getAllSuratDomisiliLembaga = async (req, res, next) => {
  try {
    // Fetch all records from SuketPengurusanKK table
    const data = await SuratDomisiliLembaga.findAll();

    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
}

exports.deleteSuratDomisiliLembaga = async (req, res, next) => {
  try {
    const postId = req.params.id;
    console.log("SuratDomisiliLembaga", postId);

    const result = await SuratDomisiliLembaga.destroy({
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
    next(error);
  }
}

exports.insertSuratUsaha = async (req, res, next) => {
  try {
    const data = req.body;

    const respInsert = await SuketUsaha.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketusaha.docx"
    );
    const namaFile = await docxTemplate.generate(data, pathTemplate, "SuketUsaha");

    const respData = respInsert.toJSON();

    await SuketUsaha.update(
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
    next(error);
  }
}

exports.getAllSuratUsaha = async (req, res, next) => {
  try {
    // Fetch all records from SuketPengurusanKK table
    const data = await SuketUsaha.findAll();

    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
}

exports.deleteSuratUsaha = async (req, res, next) => {
  try {
    const postId = req.params.id;
    console.log("SuketUsaha", postId);

    const result = await SuketUsaha.destroy({
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
    next(error);
  }
}

exports.insertSuketBedaData = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    const respInsert = await SuketBedaData.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketbedadata.docx"
    );
    const namaFile = await docxTemplate.generate(data, pathTemplate, "SuketBedaData");

    const respData = respInsert.toJSON();

    await SuketBedaData.update(
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
    next(error);
  }
}

exports.getAllSuketBedaData = async (req, res, next) => {
  try {
    // Fetch all records from SuketPengurusanKK table
    const data = await SuketBedaData.findAll();

    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
}

exports.deleteSuketBedaData = async (req, res, next) => {
  try {
    const postId = req.params.id;
    console.log("SuketUsaha", postId);

    const result = await SuketBedaData.destroy({
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
    next(error);
  }
}

exports.insertSuketCatatanKepolisian = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    const respInsert = await SuketCatatanKepolisian.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketcatatankepolisian.docx"
    );
    const namaFile = await docxTemplate.generate(data, pathTemplate, "SuketCatatanKepolisian");

    const respData = respInsert.toJSON();

    await SuketCatatanKepolisian.update(
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
    next(error);
  }
}

exports.getAllSuketCatatanKepolisian = async (req, res, next) => {
  try {
    // Fetch all records from SuketPengurusanKK table
    const data = await SuketCatatanKepolisian.findAll();

    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
}

exports.deleteSuketCatatanKepolisian = async (req, res, next) => {
  try {
    const postId = req.params.id;
    console.log("SuketCatatanKepolisian", postId);

    const result = await SuketCatatanKepolisian.destroy({
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
    next(error);
  }
}

exports.insertSuketKematian = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    const respInsert = await SuketKematian.create(data);
    const pathTemplate = path.join(
      __dirname,
      "..",
      "public",
      "templates",
      "temp_suketkematian.docx"
    );
    const namaFile = await docxTemplate.generate(data, pathTemplate, "SuketKematian");

    const respData = respInsert.toJSON();

    await SuketKematian.update(
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
    next(error);
  }
}

exports.getAllSuketKematian = async (req, res, next) => {
  try {
    // Fetch all records from SuketPengurusanKK table
    const data = await SuketKematian.findAll();

    return res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
}

exports.deleteSuketKematian = async (req, res, next) => {
  try {
    const postId = req.params.id;
    console.log("SuketKematian", postId);

    const result = await SuketKematian.destroy({
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
    next(error);
  }
}