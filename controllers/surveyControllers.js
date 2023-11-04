const { Survey } = require('../models');

exports.buatSurvey = async (req, res) => {
  try {

    let data = req.body;
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] == 'true') {
          data[key] = 1;
        } else if (data[key] == 'false') {
          data[key] = 0;
        }
      }
    }

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

exports.getAllSurvey = async (req, res) => {
  try {
    const data = await Survey.findAll();
    return res.status(200).json({
      status: true,
      msg: "Berhasil",
      data: data,
    });
  } catch (error) {
    console.error("Error while retrieving data:", error.message);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
}

exports.deleteSurvey = async (req, res, next) => {
  try {
    const surveyId = req.params.id;
    console.log("Survey", surveyId);

    const result = await Survey.destroy({
      where: {
        id: surveyId,
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