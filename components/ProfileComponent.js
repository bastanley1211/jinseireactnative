import React, { Component } from "react";
import { Text, Button, Image, Input } from "react-native-elements";
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar,
  Modal,
} from "react-native";
import { baseUrl } from "../shared/baseUrl";
import { connect } from "react-redux";
import { updateUser, addUser, fetchUser } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  updateUser: (firstname, lastname, age, email, password) =>
    updateUser(firstname, lastname, age, email, password),
  addUser: (firstname, lastname, age, email, password) =>
    addUser(firstname, lastname, age, email, password),
  fetchUser,
};

const testImage = `${baseUrl}/images/testPhoto.jpg`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleChange() {
    const { firstname, lastname, age, email, password } = this.state;
    this.props.updateUser(firstname, lastname, age, email, password);
    this.toggleModal();
  }

  resetForm() {
    this.setState({
      firstname: "",
      lastname: "",
      age: 0,
      email: "",
      password: "",
    });
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  static navigationOptions = {
    title: "Profile",
  };

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const renderUserData = ({ item }) => {
      const posts = this.props.posts.posts;
      const numPosts = posts.length.toString();
      return (
        <View>
          <Image source={{ uri: testImage }} style={styles.userPhotoFrame} />
          <View style={styles.rowWrapper}>
            <Text h4>Name: </Text>
            <Text style={styles.profileData}>
              {item.firstname} {item.lastname}
            </Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Age: </Text>
            <Text style={styles.profileData}>{item.age}</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Total Posts:</Text>
            <Text style={styles.profileData}>{numPosts}</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Email: </Text>
            <Text style={styles.profileData}>{item.email}</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text h4>Password: </Text>
            <Text style={styles.profileData}>{item.password}</Text>
          </View>
        </View>
      );
    };
    return (
      <ScrollView contentContainerStyle={styles.profileWrapper}>
        <FlatList
          data={this.props.user.user}
          renderItem={renderUserData}
          keyExtractor={(item) => item.id}
        />
        <Button
          title="Update Profile"
          style={{ maxWidth: 400, textAlign: "center" }}
          buttonStyle={{ color: "white", backgroundColor: "grey" }}
          onPress={() => this.toggleModal()}
        />
        <Modal
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => this.toggleModal()}
        >
          <View
            style={{ color: "black", marginTop: "auto", marginBottom: "auto" }}
          >
            <Input
              label="First Name"
              placeholder="First Name"
              value={this.props.user.firstname}
              onChangeText={(firstname) => this.setState({ firstname })}
            />
            <Input
              label="Last Name"
              placeholder="Last Name"
              value={this.props.user.lastname}
              onChangeText={(lastname) => this.setState({ lastname })}
              containerStyle={{ color: "black" }}
            />
            <Input
              label="Age"
              placeholder="Age"
              value={this.props.user.age}
              onChangeText={(age) => this.setState({ age })}
            />
            <Input
              label="Email"
              placeholder="Email"
              value={this.props.user.email}
              onChangeText={(email) => this.setState({ email })}
            />
            <Input
              label="Password"
              placeholder="Password"
              value={this.props.user.password}
              onChangeText={(password) => this.setState({ password })}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Button
                title="Submit"
                titleStyle={{ fontSize: 24 }}
                buttonStyle={{
                  color: "white",
                  backgroundColor: "skyblue",
                  textAlign: "center",
                }}
                onPress={() => {
                  this.handleChange();
                  this.resetForm();
                }}
              />
              <Button
                title="Cancel"
                titleStyle={{ fontSize: 24 }}
                buttonStyle={{ color: "white", backgroundColor: "grey" }}
                onPress={() => this.toggleModal()}
              />
            </View>
          </View>
        </Modal>
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
    justifyContent: "center",
  },
  profileData: {
    fontSize: 18,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
