import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Card, Text, ListItem, Button, Image } from "react-native-elements";
import { POSTS } from "../shared/posts";
import { USER } from "../shared/user";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
  };
  render() {
    const renderUserData = ({ item }) => {
      return (
        <View>
          <View>
            <Card
              title={`${item.firstName} ${item.lastName}`}
              style={styles.userPhotoFrame}
              image={item.photo}
            />
            <Text>Images only show when in a card</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Name: </Text>
            <ListItem title={`${item.firstName} ${item.lastName}`} />
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Age: </Text>
            <ListItem title={item.age} />
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Journal Post Streak: </Text>
            <ListItem title={`${item.postStreak} days`} />
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Email: </Text>
            <ListItem title={item.email} />
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Password: </Text>
            <ListItem title={item.password} />
          </View>
        </View>
      );
    };
    return (
      <SafeAreaView style={styles.profileWrapper}>
        <FlatList
          data={USER}
          renderItem={renderUserData}
          keyExtractor={(item) => item.id}
        />
        <Button
          title="Update Profile"
          style={{ maxWidth: "150px", textAlign: "center", margin: "0 auto" }}
          color="#808080"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  profileWrapper: {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "20px",
  },
  userPhotoFrame: {
    borderRadius: "100px",
    backgroundSize: "contain",
  },
});

export default Profile;
