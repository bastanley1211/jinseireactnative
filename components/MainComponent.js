import React, { Component } from "react";
import Home from "./HomeComponent";
import Profile from "./ProfileComponent";
import Settings from "./SettingsComponent";
import JournalHistory from "./JournalHistoryComponent";
import PostInfo from "./PostInfoComponent";
import Constants from "expo-constants";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Icon } from "react-native-elements";
import SafeAreaView from "react-native-safe-area-view";

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "rgb(204, 255, 255)",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        color: "#000",
      },
      headerLeft: (
        <Icon
          name="home"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const JournalHistoryNavigator = createStackNavigator(
  {
    JournalHistory: {
      screen: JournalHistory,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="history"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    PostInfo: { screen: PostInfo },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(204, 255, 255)",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        color: "#000",
      },
    },
  }
);

const ProfileNavigator = createStackNavigator(
  {
    Profile: { screen: Profile },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "rgb(204, 255, 255)",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        color: "#000",
      },
      headerLeft: (
        <Icon
          name="user"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const SettingsNavigator = createStackNavigator(
  {
    Settings: { screen: Settings },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "rgb(204, 255, 255)",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        color: "#000",
      },
      headerLeft: (
        <Icon
          name="cog"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Jinsei</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    "Journal History": {
      screen: JournalHistoryNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="history"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        drawerLabel: "Profile",
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: SettingsNavigator,
      navigationOptions: {
        drawerLabel: "Settings",
        drawerIcon: ({ tintColor }) => (
          <Icon name="cog" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: "rgb(204, 255, 255)",
    contentComponent: CustomDrawerContentComponent,
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "rgb(204, 255, 255)",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    textAlign: "center",
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#000",
    fontSize: 24,
  },
});

export default Main;
