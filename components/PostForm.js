import React, { useState } from "react";
import { PROMPTS } from "../shared/prompts";
import { TextInput, View } from "react-native";
import { Text } from "react-native-elements";

const pickPost = PROMPTS.map((prompt) => `${prompt.promptQ}`);
const todaysPost = pickPost[0];

const PostFormTextInput = (props) => {
  return (
    <TextInput
      style={{ backgroundColor: "white" }}
      {...props}
      editable
      maxLength={300}
    />
  );
};

const PostForm = () => {
  const [value, onChangeText] = useState(
    "Type your answer to the daily journal prompt here..."
  );
  return (
    <View style={styles.postBox}>
      <Text h3 style={{ textAlign: "center", marginBottom: "15px" }}>
        {todaysPost}
      </Text>
      <PostFormTextInput
        multiline
        numberOfLines={4}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

const styles = {
  postBox: {
    background: "rgb(224,235,235)",
    maxWidth: "750px",
    marginTop: "20px",
    border: "1px solid black",
    borderRadius: "4px",
    padding: "15px",
  },
};

export default PostForm;
