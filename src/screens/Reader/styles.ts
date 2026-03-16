import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282A36",
    flex: 1,
    paddingHorizontal: 20
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  verseContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  verse: {
    fontSize: 10,
    fontWeight: "600",
    color: "#F8F8F2",
  },
  text: {
    padding: 10,
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#F8F8F2",
    textAlign: "justify"
  }
})