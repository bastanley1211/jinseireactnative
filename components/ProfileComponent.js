import React, { Component } from "react";
import { Text, Button, Image } from "react-native-elements";
import { USER } from "../shared/user";
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { baseUrl } from "../shared/baseUrl";

const testImage = `${baseUrl}/images/testPhoto.jpg`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: USER,
    };
  }
  static navigationOptions = {
    title: "Profile",
  };
  render() {
    const renderUserData = ({ item }) => {
      return (
        <View>
          <Image source={{ uri: testImage }} style={styles.userPhotoFrame} />
          <View style={styles.rowWrapper}>
            <Text h4>Name: </Text>
            <Text>
              {item.firstName} {item.lastName}
            </Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Age: </Text>
            <Text>{item.age}</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Journal Post Streak: </Text>
            <Text>{item.postStreak} days</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Email: </Text>
            <Text>{item.email}</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Password: </Text>
            <Text>{item.password}</Text>
          </View>
        </View>
      );
    };
    return (
      <ScrollView contentContainerStyle={styles.profileWrapper}>
        <FlatList
          data={this.state.user}
          renderItem={renderUserData}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button
          title="Update Profile"
          style={{ maxWidth: 400, textAlign: "center" }}
          color="#808080"
        />
      </ScrollView>
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
    backgroundColor: "rgba(255,255,255,0.05)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  userPhotoFrame: {
    resizeMode: "cover",
    borderRadius: 100,
    height: 150,
    width: 150,
    marginTop: 15,
    alignSelf: "center",
  },
});

export default Profile;
