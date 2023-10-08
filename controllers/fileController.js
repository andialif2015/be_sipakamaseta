
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
        const fileType =
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

        res.setHeader(
          "Content-Disposition",
          `attachment; filename=${file}.docx`
        );
        res.setHeader("Content-Type", fileType);
        
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



