import React, { Component } from "react";
import { FlatList, ImageBackground } from "react-native";
import { ListItem } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

class JournalHistory extends Component {
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
        source={{ uri: baseUrl + "/images/linedpaperbg.png" }}
        style={{ width: "100%", height: "100%" }}
      >
        <FlatList
          data={this.props.posts.posts}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ImageBackground>
    );
  }
}

export default connect(mapStateToProps)(JournalHistory);
