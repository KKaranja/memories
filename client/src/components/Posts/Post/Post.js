import React from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
};

export default Post;
