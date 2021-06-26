import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  navbar: {
    background: "rgb(204, 255, 255)",
    boxShadow: "0px 1px 5px lightgrey",
  },
  postBox: {
    background: "rgb(224,235,235)",
    maxWidth: "750px",
    marginTop: "20px",
  },
  post: {
    maxWidth: "750px",
    borderRadius: "4px",
  },
  mainBody: {
    maxWidth: "750px",
  },
  footer: {
    background: "rgb(204, 255, 255)",
    position: "fixed",
    bottom: "0px",
    height: "56px",
    boxShadow: "0px -1px 5px lightgrey",
  },
  userPhotoFrame: {
    borderRadius: "100px",
    maxWidth: "150px",
  },
  profileWrapper: {
    maxWidth: "500px",
    width: "100%",
    background: "rgba(255,255,255,0.05)",
  },
});
