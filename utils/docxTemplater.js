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