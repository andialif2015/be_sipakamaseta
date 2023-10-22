const { Survey } = require('../models');

exports.coba = async(req,res,next) => {
    try {

        return res.status(200).jso({
            status: true,
            msg: 'sukses',
        });
    } catch (error) {
        next(error);
    }
}