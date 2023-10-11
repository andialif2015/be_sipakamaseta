const { Post } = require("../models");
const path = require('path')

exports.insertPost = async(req, res) => {
    try {
      let content = req.body.file;
      let title = req.body.title;
      let price = req.body.price;
      let kontak = req.body.kontak;

      //file
      const timestamp = Date.now();
      const ext = path.extname(content);
      let fileName = `post_${timestamp}.${ext}`;

      //public/post
      let dir = path.join(__dirname, '..','public','post', fileName);

      content.mv(dir);

      //insert in db
      await Post.create({
        title: title,
        price: price,
        content: fileName,
        kontak: kontak
      });

      return res.status(200).json({
        status: true,
        msg: "Berhasil",
      });

    } catch (error) {
        console.error('Message : ', error.message);
        return res.status(500).json({
            status: false,
            msg: 'Internal Server Error',
        })
    }
}