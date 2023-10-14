const { Post } = require("../models");
const path = require('path')

exports.insertPost = async(req, res) => {
    try {
      let content = req.files.file;
      let title = req.body.title;
      let price = req.body.price;
      let kontak = req.body.kontak;

      //file
      const timestamp = Date.now();
      const ext = path.extname(content.name);
      
      let fileName = `post_${timestamp}.${ext}`;

      //public/post
      let dir = path.join(__dirname, '..','public','post', fileName);

      await content.mv(dir);

      //insert in db
      await Post.create({
        title: title,
        price: price,
        content: fileName,
        kontak: kontak,
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

exports.getAllPosts = async (req, res) => {
  try {

    const publish = req.query.publish;
    let p = 0;
    
    let posts = [];
    
    if(publish){
      if (publish == "true") {
        p = 1;
      } else {
        p = 0;
      }
      posts = await Post.findAll({
        where: {
          published: p,
        },
      });
      
    }else{
      posts = await Post.findAll();
    }


    return res.status(200).json({
      status: true,
      msg: 'success',
      data: posts,
    });

  } catch (error) {
    console.error("Message : ", error.stack);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

exports.deletePostById = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log('post id',postId);
    const result = await Post.destroy({
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