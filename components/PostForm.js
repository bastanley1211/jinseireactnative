import React, { useState } from "react";
import { PROMPTS } from "../shared/prompts";
import { TextInput, View, Button } from "react-native";
import { Text, ListItem } from "react-native-elements";

const pickPost = PROMPTS.map((prompt) => `${prompt.promptQ}`);
const todaysPost = pickPost[0];

const PostFormTextInput = (props) => {
  return (
    <TextInput
      style={{ backgroundColor: "white", padding: 15 }}
      {...props}
      editable
      maxLength={300}
    />
  );
};

const PostForm = (props) => {
  const [value, onChangeText] = useState(
    "Type your answer to the daily journal prompt here..."
  );
  return (
    <View style={styles.postBox}>
      <Text style={{ textAlign: "center", marginBottom: 15, fontSize: "18px" }}>
        {todaysPost}
      </Text>
      <PostFormTextInput
        multiline
        numberOfLines={4}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button
        color="black"
        title="Post"
        onPress={() => alert(`Today's post:\n ${value}`)}
      />
    </View>
  );
};

const styles = {
  postBox: {
    backgroundColor: "rgb(224,235,235)",
    maxWidth: 750,
    border: "1px solid black",
    borderRadius: 4,
    padding: 15,
  },
};

export default PostForm;
