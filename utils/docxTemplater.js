const fs = require('fs');
const path = require('path');
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");


exports.generate = async(data, pathTemplate, jenis) => {
    try {
        const templateContent = fs.readFileSync(pathTemplate, "binary");
        const zip = new PizZip(templateContent);
        const doc = new Docxtemplater(zip);
        let dataForm = {};
        
        if (jenis == "spfromdesa") {
            dataForm = setDataSPDesa(data);
        }else if(jenis == 'suketwali'){
            dataForm = setDataSuketWali(data);
        }else if(jenis == 'suketblmktp'){
            dataForm = setDataSuketBlmKtp(data);
        }else if(jenis == 'suketblmpunyarumah'){
          dataForm = setDataSuketBlmPunyaRumah(data);
        }else if(jenis == 'sptodesa'){
          dataForm = setDataSpToDesa(data);
        }else if(jenis == 'superimunisasi'){
          dataForm = setDataSuperImunisasi(data);
        }else if(jenis == 'superutangpiutang'){
          dataForm = setDataSuperUtangPiutang(data);
        }else if(jenis == 'suketjabatan'){
          dataForm = setDataSuketJabatan(data);
        }else if(jenis == 'suketdomisili'){
          dataForm = setDataSuketDomisili(data);
        }else if(jenis == 'suketghoib'){
          dataForm = setDataSuketGhoib(data);
        }else if(jenis == 'suketkehilanganstpd'){
          dataForm = setDataSuketKehilanganStpd(data);
        }else if(jenis == 'suketkehilangankk'){
          dataForm = setDataSuketKehilangankk(data);
        }

        doc.setData(dataForm);
        doc.render();

        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const fileName = `output_${timestamp}.docx`;

        const outputPath = path.join(__dirname,'..','public','dokumen',`${fileName}`);
        const buffer = doc.getZip().generate({ type: "nodebuffer" });

        fs.writeFileSync(outputPath, buffer); 

        return fileName;

    } catch (error) {
        throw error
    }
}

function setDataSPDesa(data){
  return {
    name: data.name,
    tempatL: data.tempatL,
    tglL: data.tglL,
    nik: data.nik,
    warga: data.wargaN,
    agama: data.agama,
    pekerjaan: data.work,
    alamat: data.alamat,
    for: data.for,
  }
}

function setDataSuketWali(data){
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

function setDataSuketBlmKtp(data){
  return {
      name: data.name,
      nik: data.nik,
      tempatL: data.tempatlahir,
      tglL: data.tgl,
      alamat: data.alamat,
      dusun: data.dusun,
      thnktp: data.tpktp,
  }
}

function setDataSuketBlmPunyaRumah(data){
  const parts = inputString.split("/");
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

function setDataSpToDesa(data){
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatlahir,
    tglL: data.tgl,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    sekolah: data.sekolah,
    namewali: data.namewali,
    tempatLwali: data.tempatlahirwali,
    tglLwali: data.tglwali,
    alamatwali: data.alamatwali,
    genderwali: data.genderwali,
    agamawali: data.agamawali,
    workwali: data.workwali,
  }
}

function setDataSuperImunisasi(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatlahir,
    tglL: data.tgl,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    sekolah: data.sekolah,
    namewali: data.namewali,
    tempatLwali: data.tempatlahirwali,
    tglLwali: data.tglwali,
    alamatwali: data.alamatwali,
    genderwali: data.genderwali,
    agamawali: data.agamawali,
    workwali: data.workwali,
  };
}

function setDataSuperUtangPiutang(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatlahir,
    tglL: data.tgl,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    sekolah: data.sekolah,
    namewali: data.namewali,
    tempatLwali: data.tempatlahirwali,
    tglLwali: data.tglwali,
    alamatwali: data.alamatwali,
    genderwali: data.genderwali,
    agamawali: data.agamawali,
    workwali: data.workwali,
  };
}

function setDataSuketJabatan(data) {
  return {
    name: data.name,
    tempatL: data.tempatlahir,
    tglL: data.tgl,
    gender: data.gender,
    alamat: data.alamat,
    lamajabatan: data.duration,
    jabatan: data.jabatan,
  };
}
function setDataSuketDomisili(data) {
  return {
    name: data.name,
      tempatL: data.tempatlahir,
      tglL: data.tgl,
      gender: data.gender,
      agama: data.agama,
      work: data.pekerjaan,
      nik: data.nik,
      stsnkh: data.stsnkh,
      alamat: data.alamat,
  };
}

function setDataSuketGhoib(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatlahir,
    tglL: data.tgl,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    sekolah: data.sekolah,
    namewali: data.namewali,
    tempatLwali: data.tempatlahirwali,
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
    tempatL: data.tempatlahir,
    tglL: data.tgl,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    sekolah: data.sekolah,
    namewali: data.namewali,
    tempatLwali: data.tempatlahirwali,
    tglLwali: data.tglwali,
    alamatwali: data.alamatwali,
    genderwali: data.genderwali,
    agamawali: data.agamawali,
    workwali: data.workwali,
  };
}
function setDataSuketKehilangankk(data) {
  return {
    name: data.name,
    nohp: data.nohp,
    tempatL: data.tempatlahir,
    tglL: data.tgl,
    alamat: data.alamat,
    agama: data.agama,
    gender: data.gender,
    sekolah: data.sekolah,
    namewali: data.namewali,
    tempatLwali: data.tempatlahirwali,
    tglLwali: data.tglwali,
    alamatwali: data.alamatwali,
    genderwali: data.genderwali,
    agamawali: data.agamawali,
    workwali: data.workwali,
  };
}