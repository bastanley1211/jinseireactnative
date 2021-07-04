import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-elements";
import { post } from "./Style";
import { POSTS } from "../shared/posts";
import { USER } from "../shared/user";

function RenderPostData(props) {
  const renderedPost = POSTS.map((post) => `${post.text}`)[0];
  return <>{renderedPost}</>;
}

const postTypeHeading = POSTS.map((heading) => `${heading.typeTitle}`)[0];
const userName = USER.map((user) => `${user.firstName} ${user.lastName}`);

function Post(props) {
  return (
    <View style={post}>
      <Text h3>
        {postTypeHeading} {userName}
      </Text>
      <View>
        <Image source="https://upload.wikimedia.org/wikipedia/commons/6/64/Simple_light_bulb_graphic.png" />
        <Text>{RenderPostData()}</Text>
      </View>
      <Text>
        Created:{" "}
        {
          POSTS.map((post) => {
            return (
              <>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(post.date)))}
              </>
            );
          })[0]
        }
      </Text>
    </View>
  );
}

export default Post;
