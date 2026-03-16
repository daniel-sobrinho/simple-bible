import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282A36",
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  headerSpacer: {
    width: 40,
  },
  screenTitle: {
    color: "#F8F8F2",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  settingsButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "rgba(248, 248, 242, 0.12)",
  },
  bookTitle: {
    color: "#F8F8F2",
    fontSize: 18,
    padding: 10,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#44475A"
  }
})