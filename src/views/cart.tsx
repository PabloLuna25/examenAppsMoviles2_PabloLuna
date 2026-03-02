import React from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { useCart } from "../components/cartContext";
import styles from "../styles/cartStyles";

function Cart() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  const handlePay = () => {
    Alert.alert("Payment successful!");
    clearCart();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your cart is empty</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeFromCart(item.id)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text style={styles.totalText}>
        Total to pay: ${total.toFixed(2)}
      </Text>

      <TouchableOpacity
        style={[
          styles.payButton,
          cart.length === 0 && styles.disabledButton,
        ]}
        onPress={handlePay}
        disabled={cart.length === 0}
      >
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>

      {/* CANCEL BUTTON */}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={clearCart}
      >
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Cart;