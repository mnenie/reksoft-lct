import PostModel from "../models/Post.js"
import CommentModel from "../models/Comment.js"


export const getAll = async (req, res) => {
  try {

    const limit = req.query.limit;
    const skip = req.query.skip;

    const posts = await PostModel.find()
      .populate({
        path: 'owner',
        select: '-passwordHash',
      })
      .populate({
        path: 'comments',
        populate: {
          path: 'owner',
          select: '-passwordHash',
        },
      })
      .skip(skip)
      .limit(limit)
      .exec();

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить статьи',
    });
  }
};


export const like = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.userId;
    const doc = await PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { likeCount: 1 },
        $push: { userLikes: userId },
      },
      {
        returnDocument: 'after',
      },
    ).populate({
      path: 'owner',
      select: '-passwordHash',
    })
    .populate({
      path: 'comments',
      populate: {
        path: 'owner',
        select: '-passwordHash',
      },
    })
    .exec();
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось поставить лайк',
    });
  }
};

export const unlike = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.userId;
    const doc = await PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { likeCount: -1 },
        $pull: { userLikes: userId }, 
      },
      {
        returnDocument: 'after',
      },
    ).populate({
      path: 'owner',
      select: '-passwordHash',
    })
    .populate({
      path: 'comments',
      populate: {
        path: 'owner',
        select: '-passwordHash',
      },
    })
    .exec();

    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось убрать лайк',
    });
  }
};


export const remove = async(req,res)=>{
    try {
        const PostId = req.params.id;

        await PostModel.findOneAndDelete({
            _id:PostId,
        })
        await CommentModel.deleteMany({
            post: PostId,
        }).then(()=>res.status(200).json({message: 'Заметка удалена'}));
        
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить статьи',
        });
        
    }
}

export const create = async (req, res) => {
    const none_arr =[""]
    try {
        const doc = new PostModel({
            title: req.body.title,
            owner: req.userId,
            text: req.body.text,
            img: none_arr.includes(req.body.img)? [] : req.body.img,
            attachment: none_arr.includes(req.body.attachment)? [] : req.body.attachment,
            comments: [],
            tags: none_arr.includes(req.body.tags)? [] : req.body.tags,
            postType: req.body.postType,

        });
        const Post = await doc.save();
        const posts = await PostModel.findById(Post._id)
      .populate({
        path: 'owner',
        select: '-passwordHash',
      })
      .populate({
        path: 'comments',
        populate: {
          path: 'owner',
          select: '-passwordHash',
        },
      })
      res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать заметку',
        });
        
    }
};

export const update = async(req, res) => {
    try {
        const PostId = req.params.id;
        const user_id = req.userId;
        await PostModel.updateOne({
            _id: PostId,
        },
        {
            title: req.body.title,
            owner: req.userId,
            text: req.body.text,
            img: req.body.img,
            attachment: req.body.attachment,
            tags: req.body.tags,
        },
        );
        const updatedPost = await PostModel.findById(PostId)
        .populate({
          path: 'owner',
          select: '-passwordHash'
        })
        .populate({
          path: 'comments',
          populate: {
            path: 'owner',
            select: '-passwordHash'
          }
        })
        .exec();
  
      res.json(updatedPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось обновить заметку',
        })
        
    }
};
export const addComment = async (req, res) => {
    try {
      const postId = req.params.id;
      const userId = req.userId;
      const newComment = new CommentModel({
        owner: userId,
        text: req.body.text,
        post: postId,
        createdAt: new Date(),
      });
      const savedComment = await newComment.save();
      await PostModel.updateOne(
        { _id: postId },
        { $push: { comments: savedComment._id } }
      );

      const updatedPost = await PostModel.findById(postId)
        .populate({
          path: 'owner',
          select: '-passwordHash'
        })
        .populate({
          path: 'comments',
          populate: {
            path: 'owner',
            select: '-passwordHash'
          }
        })
        .exec();
  
      res.json(updatedPost);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось добавить комментарий'
      });
    }
  };