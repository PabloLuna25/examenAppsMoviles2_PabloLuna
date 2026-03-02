import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "gray",
  },

  productCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 10,
  },

  productTitle: {
    fontSize: 16,
    fontWeight: "600",
    width: 200,
  },

  productPrice: {
    fontSize: 14,
    color: "green",
    marginTop: 5,
  },

  deleteButton: {
    backgroundColor: "#ff4d4d",
    padding: 8,
    borderRadius: 6,
  },

  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },

  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },

  payButton: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },

  disabledButton: {
    backgroundColor: "#aaa",
  },

  payText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  cancelButton: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  cancelText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});