import React, { Component } from "react";
import { FlatList, ImageBackground } from "react-native";
import { ListItem } from "react-native-elements";
import { POSTS } from "../shared/posts";

class JournalHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: POSTS,
    };
  }

  static navigationOptions = {
    title: "Journal History",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderPostItem = ({ item }) => {
      return (
        <ListItem
          title={item.date}
          subtitle={item.text}
          onPress={() => navigate("PostInfo", { postId: item.id })}
          containerStyle={{ backgroundColor: "transparent" }}
        />
      );
    };

    return (
      <ImageBackground
        source={require("../assets/images/linedpaperbg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <FlatList
          data={this.state.posts}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ImageBackground>
    );
  }
}

export default JournalHistory;
