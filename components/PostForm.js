import React, { Component } from "react";
import { TextInput, View, Button } from "react-native";
import { Text, ListItem, Input } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { FlatList } from "react-native";
import { createPost } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    prompts: state.prompts,
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  createPost: (date, typeTitle, text) => createPost(date, typeTitle, text),
};

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      typeTitle: "",
      date: new Date(),
    };
  }

  handlePost(text) {
    const { typeTitle, date } = this.state;
    this.props.createPost(date, typeTitle, text);
  }

  resetForm() {
    this.setState({
      text: "",
      typeTitle: "",
      date: new Date(),
    });
  }

  render() {
    const renderTodaysPrompt = ({ item }) => {
      return (
        <Text style={{ padding: 10, paddingBottom: 20 }}>{item.promptQ}</Text>
      );
    };
    return (
      <View style={styles.postBox}>
        <FlatList
          data={this.props.prompts.prompts.slice(-1)}
          renderItem={renderTodaysPrompt}
          keyExtractor={(item) => item.id}
        />

        <Input
          multiline
          numberOfLines={5}
          value={this.state.text}
          placeholder="Please type today's post here..."
          onChangeText={(text) => this.setState({ text: text })}
        />
        <Button
          color="black"
          title="Post"
          onPress={() => {
            this.handlePost(this.state.text);
            this.resetForm();
          }}
        />
      </View>
    );
  }
}

const styles = {
  postBox: {
    backgroundColor: "rgb(224,235,235)",
    maxWidth: 750,
    border: "1px solid black",
    borderRadius: 4,
    padding: 15,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
