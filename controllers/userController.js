const { User } = require("../models/User");

/**
 * @desc Toggle Like
 * @route /api/posts/like/:id
 * @method PUT
 * @access private (only logged in user)
 */
module.exports.toggleLikeCtrl = async (req, res) => {
  const loggedInUser = req.headers.id;

  const { id: userId } = req.params;

  let user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "post not found" });
  }

  const isUserAlreadyLiked = user.likes.find(
    (user) => user.toString() === loggedInUser
  );

  if (isUserAlreadyLiked) {
    user = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { likes: loggedInUser },
      },
      { new: true }
    );
  } else {
    user = await User.findByIdAndUpdate(
      userId,
      {
        $push: { likes: loggedInUser },
      },
      { new: true }
    );
  }
  res.status(200).json(user);
};
