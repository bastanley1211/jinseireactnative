import React from "react";
import PostForm from "./PostForm";
import { View } from "react-native";

class PostBox extends React.Component {
  render() {
    return (
      <View>
        <PostForm />
      </View>
    );
  }
}

export default PostBox;
