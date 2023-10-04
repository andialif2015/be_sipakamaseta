const { Survey } = require('../models');

exports.buatSurvey = async(req,res) => {
    try {

        const data = req.body;

        await Survey.create(data);
        
        return res.status(200).json({
          status: true,
          msg: "Berhasil Buat Spd",
        });
    } catch (error) {
        console.error("Error Message :", error.message);
        return res.status(500).json({
          status: false,
          msg: "Internal Server Error",
        });
    }
}
