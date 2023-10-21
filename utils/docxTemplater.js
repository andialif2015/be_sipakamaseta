const fs = require('fs');
const path = require('path');
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");


exports.generate = async (data, pathTemplate, jenis) => {
  try {
    const templateContent = fs.readFileSync(pathTemplate, "binary");
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    let dataForm = {};

    if (jenis == "spfromdesa") {
      dataForm = setDataSPDesa(data);
    } else if (jenis == 'suketwali') {
      dataForm = setDataSuketWali(data);
    } else if (jenis == 'suketblmktp') {
      dataForm = setDataSuketBlmKtp(data);
    } else if (jenis == 'suketblmpunyarumah') {
      dataForm = setDataSuketBlmPunyaRumah(data);
    } else if (jenis == 'sptodesa') {
      dataForm = setDataSpToDesa(data);
    } else if (jenis == 'superimunisasi') {
      dataForm = setDataSuperImunisasi(data);
    } else if (jenis == 'superutangpiutang') {
      dataForm = setDataSuperUtangPiutang(data);
    } else if (jenis == 'suketjabatan') {
      dataForm = setDataSuketJabatan(data);
    } else if (jenis == 'suketdomisili') {
      dataForm = setDataSuketDomisili(data);
    } else if (jenis == 'suketghoib') {
      dataForm = setDataSuketGhoib(data);
    } else if (jenis == 'suketkehilanganstpd') {
      dataForm = setDataSuketKehilanganStpd(data);
    } else if (jenis == 'suketkehilangankk') {
      dataForm = setDataSuketKehilangankk(data);
    } else if (jenis == 'suketkekerabatan') {
      dataForm = setDataSuketKekerabatan(data);
    } else if (jenis == 'suketlahirdesa') {
      dataForm = setDataSuketLahirDesa(data);
    } else if (jenis == 'suketlokasitanah') {
      dataForm = setDataSuketLokasiTanah(data);
    } else if (jenis == 'suketmenantu') {
      dataForm = setDataSuketMenantu(data);
    } else if (jenis == 'suketpendudukliar') {
      dataForm = setDataSuketPendudukLiar(data);
    } else if (jenis == 'suketpenegasanwil') {
      dataForm = setDataSuketPenegasanWil(data);
    } else if (jenis == 'suketaktifperusahaan') {
      dataForm = setDataSuketAktifPerusahaan(data);
    } else if (jenis == 'suketuntukmenikah') {
      dataForm = setDataSuketUntukMenikah(data);
    } else if (jenis == 'sukettelahmenikah') {
      dataForm = setDataSuketTelahMenikah(data);
    } else if (jenis == 'suketpisahrumah') {
      dataForm = setDataSuketPisahRumah(data);
    } else if (jenis == 'suketpernyataanwaris') {
      dataForm = setDataSuketPernyataanWaris(data);
    } else if (jenis == 'suketpengurusanpbb') {
      dataForm = setDataSuketPengurusanPBB(data);
    } else if (jenis == 'suketpengurusankk') {
      dataForm = setDataSuketPengurusanKK(data);
    } else if (jenis == 'imbs') {
      dataForm = setDataImbs(data);
    } else if (jenis == 'suratdomisililembaga') {
      dataForm = setSuratDomisiliLembaga(data);
    } else if (jenis == 'SuketUsaha') {
      dataForm = setSuketUsaha(data);
    }


    doc.setData(dataForm);
    doc.render();

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `output_${timestamp}.docx`;

    const outputPath = path.join(__dirname, '..', 'public', 'dokumen', `${fileName}`);
    const buffer = doc.getZip().generate({ type: "nodebuffer" });

    fs.writeFileSync(outputPath, buffer);

    return fileName;

  } catch (error) {
    throw error
  }
}

function setDataSPDesa(data) {
  console.log(data);
  return {
    name: data.name,
    tempatL: data.tempatL,
    tglL: data.tglL,
    nik: data.nik,
    wargaN: data.wargaN,
    agama: data.agama,
    pekerjaan: data.work,
    alamat: data.alamat,
    for: data.tujuan,
  }
}

function setDataSuketWali(data) {
  console.log(data);
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    sekolah: data.sekolah,
    namewali: data.namewali,
    tempatLwali: data.tempatLwali,
    tglLwali: data.tglLwali,
    alamatwali: data.alamatwali,
    genderwali: data.genderwali,
    agamawali: data.agamawali,
    workwali: data.workwali,
  };
}

function setDataSuketBlmKtp(data) {
  return {
    name: data.name,
    nik: data.nik,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    dusun: data.dusun,
    thnktp: data.tpktp,
  }
}

function setDataSuketBlmPunyaRumah(data) {
  const parts = data.rtrw.split("/");
  const rt = parts[0];
  const rw = parts[1];
  return {
    name: data.name,
    nik: data.nik,
    alamat: data.alamat,
    gender: data.gender,
    work: data.work,
    agama: data.agama,
    rt: rt,
    rw: rw,
    dusun: data.dusun,
  }
}

function setDataSpToDesa(data) {
  console.log(data);
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    nik: data.nik,
    nokk: data.nokk,
    work: data.work,
    dusun: data.dusun,
    tujuan: data.tujuan,
  }
}

function setDataSuperImunisasi(data) {
  console.log(data);
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    sekolah: data.sekolah,
    namewali: data.namewali,
    tempatLwali: data.tempatLwali,
    tglLwali: data.tglwali,
    alamatwali: data.alamatwali,
    goldar: data.goldar,
    wargaN: data.wargaN,
    work: data.work,
  };
}

function setDataSuperUtangPiutang(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    alamat: data.alamat,
    work: data.work,
    umur: data.umur,
    name_dua: data.name_dua,
    alamat_dua: data.alamat_dua,
    work_dua: data.work_dua,
    umur_dua: data.umur_dua,
  };
}

function setDataSuketJabatan(data) {
  return {
    name: data.name,
    tempatL: data.tempatL,
    tglL: data.tglL,
    gender: data.gender,
    alamat: data.alamat,
    lamajabatan: data.duration,
    jabatan: data.jabatan,
  };
}
function setDataSuketDomisili(data) {
  console.log("templater");
  console.log(data);
  return {
    name: data.name,
    tempatL: data.tempatL,
    tglL: data.tglL,
    gender: data.gender,
    agama: data.agama,
    work: data.work,
    nik: data.nik,
    stsnkh: data.stsnkh,
    alamat: data.alamat,
  };
}

function setDataSuketGhoib(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    sekolah: data.sekolah,
    namewali: data.namewali,
    tempatLwali: data.tempatLwali,
    tglLwali: data.tglwali,
    alamatwali: data.alamatwali,
    genderwali: data.genderwali,
    agamawali: data.agamawali,
    workwali: data.workwali,
  };
}

function setDataSuketKehilanganStpd(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    sekolah: data.sekolah,
    namewali: data.namewali,
    tempatLwali: data.tempatLwali,
    tglLwali: data.tglwali,
    alamatwali: data.alamatwali,
    genderwali: data.genderwali,
    nik: data.nik,
    work: data.work,
  };
}
function setDataSuketKehilangankk(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    nik: data.nik,
    nokk: data.nokk,
    alasan: data.alasan,
  };
}

function setDataSuketKekerabatan(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    gender: data.gender,
    nik: data.nik,
  }
}

function setDataSuketLahirDesa(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    ayah: data.ayah,
    ibu: data.ibu,
  }
}

function setDataSuketLokasiTanah(data) {

  return {
    namepemilik: data.namepemilik,
    alamattanah: data.alamattanah,
    luastanah: data.luastanah,
    luasbangunan: data.luasbangunan,
    dusun: data.dusun,
    nosertiftanah: data.nosertiftanah,
  }
}

function setDataSuketMenantu(data) {
  console.log(data);
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    nameMertua: data.nameMertua,
    tempatLMertua: data.tempatLMertua,
    tglLMertua: data.tglLMertua,
    alamatmertua: data.alamatmertua
  }
}
function setDataSuketPendudukLiar(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    gender: data.gender,
    agama: data.agama,
    work: data.work,
  }
}

function setDataSuketPenegasanWil(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    alamat: data.alamat,
    jabatan: data.jabatan,
  }
}

function setDataSuketAktifPerusahaan(data) {
  console.log(data);
  return {
    namept: data.namept,
    nohp: data.nohp,
  }
}

function setDataSuketUntukMenikah(data) {
  return {
    name: data.name,
    nohp: data.nohp,
  }
}

function setDataSuketTelahMenikah(data) {
  console.log(data);
  return {
    namepria: data.namepria, //raka tes
    nohppria: data.nohppria, //kelihatan kah
    tempatLpria: data.tempatLpria,
    tglLpria: data.tglLpria,
    alamatpria: data.alamatpria,
    agamapria: data.agamapria,
    workpria: data.workpria,
    namewanita: data.namewanita,
    nohpwanita: data.nohpwanita,
    tempatLwanita: data.tempatLwanita,
    tglLwanita: data.tglLwanita,
    alamatwanita: data.alamatwanita,
    agamawanita: data.agamawanita,
    workwanita: data.workwanita,
    tglnikah: data.tglnikah,
    lokasinikah: data.lokasinikah,
  }
}

function setDataSuketPisahRumah(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    gender: data.gender,
    agama: data.agama,
    work: data.work,
    nik: data.nik,
    alamat: data.alamat,
    dusun: data.dusun,
  }
}

function setDataSuketPernyataanWaris(data) {
  console.log(data);
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    work: data.work,
    alamat: data.alamat,
  }
}

function setDataSuketPengurusanPBB(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    nik: data.nik,
    tempatL: data.tempatL,
    tglL: data.tglL,
    gender: data.gender,
    agama: data.agama,
    work: data.work,
    alamat: data.alamat,
    dusun: data.dusun,
    rtrw: data.rtrw,
    nama_anak: data.nama_anak,
  }
}

function setDataSuketPengurusanKK(data) {
  console.log(data);
  return {
    name: data.name,
    nik: data.nik,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    alamat: data.alamat,
    agama: data.agama,
    work: data.work,
    nik: data.nik,
    gender: data.gender,
  }
}

function setDataImbs(data) {
  console.log(data);
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatL,
    tglL: data.tglL,
    nik: data.nik,
    gender: data.gender,
    agama: data.agama,
    work: data.work,
    alamat: data.alamat,
    alamatB: data.alamatB,
    type: data.type,
    buildsize: data.buildsize,
  }
}

function setSuratDomisiliLembaga(data) {
  return {
    nalemb: data.nalemb,
    nohp: data.nohp,
    alamat: data.alamat,
    tempatberdiri: data.tempatberdiri,
    tglberdiri: data.tglberdiri,
    luastanah: data.luastanah,
    luasbangunan: data.luasbangunan,
    dusun: data.dusun,
    statusValue: data.statusValue,
    fileName: data.fileName
  }
}

function setSuketUsaha(data) {
  return data
}
