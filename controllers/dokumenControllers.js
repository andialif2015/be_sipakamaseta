const { SpFromDesa, SuketWali  } = require('../models');
const docxTemplate = require('../utils/docxTemplater');
const path = require('path')

exports.insertSpFromDesa = async(req,res) => {
    try {
      const data = req.body;
      
      const sp = await SpFromDesa.create(data);
      const pathTemplate = path.join(__dirname, '..', 'public', 'templates', 'temp_spDariDesa.docx');
      const namaFile = await docxTemplate.generate(data, pathTemplate, 'spfromdesa');
      const spData = sp.toJSON();    
      
      await SpFromDesa.update({
        fileName: namaFile
      },{
        where: {
          id: spData.id
        }
      });

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

exports.insertSuketWali = async(req, res) => {
  try {
    const data = req.body;

    const suketWali = await SuketWali.create(data);
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

    const suketWaliData = suketWali.toJSON();

    await SuketWali.update({
        fileName: namaFile,
      },
      {
        where: {
          id: suketWaliData.id,
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
}