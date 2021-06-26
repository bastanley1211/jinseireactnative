import React, { Component, useState } from "react";
import { View, ScrollView, TextInput } from "react-native";
import { Card, Text } from "react-native-elements";
import { POSTS } from "../shared/posts";
import { USER } from "../shared/user";
import { PROMPTS } from "../shared/prompts";
import { FlatList } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import PostBox from "./PostBox";

const userStreak = USER.map((user) => `${user.postStreak}`);

function RenderUserData() {
  const userName = USER.map((user) => `${user.firstName} ${user.lastName}`);
  return <>{userName}</>;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: POSTS,
      user: USER,
      prompts: PROMPTS,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    const renderPostItem = ({ item }) => {
      return (
        <View>
          <ListItem title={item.date} subtitle={item.text} />
        </View>
      );
    };
    return (
      <View style={{ padding: "30px" }}>
        <View style={{ textAlign: "center", marginBottom: "20px" }}>
          <Text h1>Welcome Back,</Text>
          <Text h1>{RenderUserData()}</Text>
        </View>
        <Divider orientation="horizontal" />;
        <View style={{ textAlign: "center", marginBottom: "10px" }}>
          <Text h2>
            Current Journal Streak:{" "}
            <Text
              style={{ textDecorationStyle: "underline", fontWeight: "bold" }}
            >
              {userStreak} days
            </Text>{" "}
          </Text>
        </View>
        <View>
          <PostBox />
        </View>
        <FlatList
          data={this.state.posts}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

export default Home;
