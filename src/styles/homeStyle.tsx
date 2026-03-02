import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  picker: {
    marginHorizontal: 15,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 10,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "green",
    marginVertical: 5,
  },
  description: {
    fontSize: 13,
    color: "#555",
  },
  category: {
    fontSize: 13,
    marginTop: 5,
  },
  rating: {
    fontSize: 13,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#000",
    padding: 12,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#000",
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
});

export default homeStyle;