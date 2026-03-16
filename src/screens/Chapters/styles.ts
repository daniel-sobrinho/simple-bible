import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282A36",
    flex: 1,
    paddingHorizontal: 20
  },
  screenTitle: {
    color: "#F8F8F2",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },
  chaptersScroll: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  chaptersRow: {
    justifyContent: "flex-start",
    marginBottom: 12,
  },
  chapterContainer: {
    backgroundColor: "#F8F8F2",
    borderRadius: 8,
    width: 80,
    height: 80,
    marginRight: 12,
    justifyContent: "center",
  },
  bookTitle: {
    textAlign: "center",
    color: "#282A36",
    fontWeight: "bold",
  }
})