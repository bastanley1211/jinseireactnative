import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { POSTS } from "../shared/posts";

function RenderPost({ post }) {
  if (post) {
    return (
      <View style={styles.postWrapper}>
        <Card title={post.date}>
          <Text style={{ margin: 10 }}>{post.typeTitle}</Text>
          <Text style={{ margin: 10 }}>{post.text}</Text>
        </Card>
      </View>
    );
  }
  return <View />;
}

class PostInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: POSTS,
    };
  }

  static navigationOptions = {
    title: "Post Information",
  };

  render() {
    const postId = this.props.navigation.getParam("postId");
    const post = this.state.posts.filter((post) => post.id === postId)[0];
    return (
      <ScrollView>
        <RenderPost post={post} />
      </ScrollView>
    );
  }
}

const styles = {
  postWrapper: {
    margin: "30px",
    padding: "30px",
  },
};

export default PostInfo;
