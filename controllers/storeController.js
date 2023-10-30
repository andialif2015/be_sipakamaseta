const path = require('path')
const { Product } = require("../models");

exports.insertProduct = async (req, res) => {
  try {
    let content = req.files.file;
    let title = req.body.title;
    let price = req.body.price;
    let kontak = req.body.kontak;

    //file
    const timestamp = Date.now();
    const ext = path.extname(content.name);

    let fileName = `post_${timestamp}${ext}`;

    // public/post
    let dir = path.join(__dirname, '..', 'public', 'uploads', fileName);

    await content.mv(dir);

    //insert in db
    await Product.create({
      title: title,
      price: price,
      content: fileName,
      kontak: kontak,
      published: 1,
    });

    return res.status(200).json({
      status: true,
      msg: "Berhasil",
    });

  } catch (error) {
    console.error('Message : ', error.stack);
    return res.status(500).json({
      status: false,
      msg: 'Internal Server Error',
    })
  }
}

exports.getAllProduct = async (req, res) => {
  try {

    // const publish = req.query.publish;
    // let p = 0;

    // let posts = [];

    // if (publish) {
    //   if (publish == "true") {
    //     p = 1;
    //   } else {
    //     p = 0;
    //   }
    //   posts = await Post.findAll({
    //     where: {
    //       published: p,
    //     },
    //   });

    // } else {
    //   posts = await Post.findAll();
    // }

    const records = await Product.findAll();

    return res.status(200).json({
      status: true,
      data: records,
    });

  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log('Product', postId);
    const result = await Product.destroy({
      where: {
        id: postId,
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
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.pubslishPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const result = await Post.update({
      published: 1
    }, {
      where: {
        id: postId,
      },
    });

    if (result[0] === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post updated successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.unPubslishPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const result = await Post.update({
      published: 0
    }, {
      where: {
        id: postId,
      },
    });

    if (result[0] === 0) {
      return res.status(404).json({
        status: false,
        msg: "Post not found",
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Post updated successfully",
    });
  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};