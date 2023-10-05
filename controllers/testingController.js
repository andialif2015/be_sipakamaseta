const { Survey } = require('../models');

exports.coba = async(req,res) => {
    try {

        return res.status(200).json({
            status: true,
            msg: 'sukses',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          status: false,
          msg: "Internal Server Error",
        });
    }
}