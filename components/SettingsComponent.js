import React, { Component } from "react";
import { ScrollView, View, Switch } from "react-native";
import { Text, CheckBox } from "react-native-elements";

class Settings extends Component {
  static navigationOptions = {
    title: "Settings",
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.settingsWrapper}>
        <ScrollView contentContainerStyle={styles.rowWrapper}>
          <Text h3>Notifications</Text>
        </ScrollView>
        <CheckBox title="Email" />
        <CheckBox title="Text" />
        <CheckBox title="Push" />
        <ScrollView contentContainerStyle={styles.rowWrapper}>
          <Text h3>Dark Mode</Text>
        </ScrollView>
        <Switch />
        <ScrollView contentContainerStyle={styles.rowWrapper}>
          <Text h3>Privacy</Text>
        </ScrollView>
        <Text h6>I allow Jinsei to track my data</Text>
        <CheckBox title="Opt Out" />
      </ScrollView>
    );
  }
}

const styles = {
  settingsWrapper: {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    padding: 20,
  },
};

export default Settings;
