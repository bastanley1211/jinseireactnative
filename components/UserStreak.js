import React, { Component } from "react";
import { baseUrl } from "../shared/baseUrl";
import { connect } from "react-redux";
import { ScrollView, Text } from "react-native";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

class UserStreak extends Component {
  render() {
    const currentNumber = this.props.posts.posts.length;
    return (
      <ScrollView>
        <Text style={{ color: "skyblue", textDecorationLine: "underline" }}>
          {currentNumber}
        </Text>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(UserStreak);
