import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282A36",
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    color: "#F8F8F2",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#F8F8F2",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fontPreview: {
    color: "#F8F8F2",
    marginTop: 12,
    textAlign: "justify",
  },
  versionItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#44475A",
  },
  versionName: {
    color: "#F8F8F2",
    fontSize: 16,
  },
  versionSelected: {
    color: "#50fa7b",
    fontWeight: "bold",
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 12,
  },
})

