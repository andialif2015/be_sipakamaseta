const path = require('path');
const fs = require('fs');

exports.downloadFile = async (req, res) => {
    try {
        const file = req.query.filename;
        const pathFile = path.join(
          __dirname,
          "..",
          "public",
          "dokumen",
          `${file}`
        );
        const fileType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

        if (fs.existsSync(pathFile)) {
          res.setHeader(
            "Content-Disposition",
            `attachment; filename=${file}.docx`
          );
          res.setHeader("Content-Type", fileType);

          // Stream the file to the response
          const fileStream = fs.createReadStream(pathFile);
          fileStream.pipe(res);
        } else {
          return res.status(404).json({
            status: false,
            msg: "File not found",
          });
        }
        
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
}



