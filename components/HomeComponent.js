import React, { Component } from "react";
import { View, ScrollView, Image } from "react-native";
import { Card, Text } from "react-native-elements";
import { FlatList, ImageBackground } from "react-native";
import { ListItem } from "react-native-elements";
import PostBox from "./PostBox";
import { baseUrl } from "../shared/baseUrl";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    user: state.user,
    prompts: state.prompts,
  };
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    const renderUserData = ({ item }) => {
      return (
        <View>
          <Text style={{ textAlign: "center", fontSize: 32 }}>
            {item.firstname} {item.lastname}
          </Text>
        </View>
      );
    };
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
      <ScrollView>
        <ImageBackground
          source={{ uri: baseUrl + "/images/linedpaperbg.png" }}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={{ textAlign: "center", marginBottom: 10, padding: 20 }}>
            <Text style={{ textAlign: "center", fontSize: 24 }}>
              Welcome Back,
            </Text>

            <FlatList
              data={this.props.user.user}
              renderItem={renderUserData}
              keyExtractor={(item) => item.id}
            />
          </View>
          <PostBox />
          <Text h4 style={{ textAlign: "center", marginTop: 10 }}>
            Most Recent Post:
          </Text>

          <FlatList
            data={this.props.posts.posts.slice(-1)}
            renderItem={renderPostItem}
            keyExtractor={(item) => item.id}
          />
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Home);
