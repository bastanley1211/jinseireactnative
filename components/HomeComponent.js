import React, { Component, useState } from "react";
import { View, ScrollView, TextInput, Image } from "react-native";
import { Card, Text } from "react-native-elements";
import { POSTS } from "../shared/posts";
import { USER } from "../shared/user";
import { PROMPTS } from "../shared/prompts";
import { FlatList, ImageBackground } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import PostBox from "./PostBox";
import { baseUrl } from "../shared/baseUrl";

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
        <Card
          containerStyle={{
            flexDirection: "column",
            backgroundColor: "rgb(224,235,235)",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <Image
              source={{ uri: baseUrl + "images/ideaPostIcon.png" }}
              style={{ width: 50, height: 50 }}
            />
            <Text>{item.typeTitle}</Text>
          </View>
          <ListItem title={item.date} subtitle={item.text} />
        </Card>
      );
    };
    return (
      <ScrollView style={{ padding: 30 }}>
        <ImageBackground
          source={require("../assets/images/linedpaperbg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={{ textAlign: "center", marginBottom: 10 }}>
            <Text style={{ textAlign: "center", fontSize: "24px" }}>
              Welcome Back,
            </Text>
            <Text h3 style={{ textAlign: "center" }}>
              {RenderUserData()}
            </Text>

            <Divider orientation="horizontal" />

            <Text
              style={{ textAlign: "center", fontSize: "14px", marginTop: 10 }}
            >
              Current Journal Streak:{" "}
              <Text
                style={{ textDecorationStyle: "solid", fontWeight: "bold" }}
              >
                {userStreak} days
              </Text>
            </Text>
          </View>
          <PostBox />
          <Text h4 style={{ textAlign: "center", marginTop: 10 }}>
            Most Recent Post:
          </Text>

          <FlatList
            data={this.state.posts.slice(-1)}
            renderItem={renderPostItem}
            keyExtractor={(item) => item.id}
          />
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default Home;
