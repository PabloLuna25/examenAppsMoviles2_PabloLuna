import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import homeStyle from "../styles/homeStyle"
import NativeLocalStorage from "../../localstorage/NativeLocalStorage";
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCart } from "../components/cartContext";



interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Cart: undefined,
};
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Home = () => {
  const { addToCart } = useCart();
  const token = NativeLocalStorage?.getItem("authToken");
  const navigation = useNavigation<NavigationProp>();
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleLogout = async() => {
    NativeLocalStorage.removeItem("authToken")
    navigation.replace("Login")
    console.log(NativeLocalStorage?.getItem("AuthToken"))
  }

  const handleCart = async() => {
    navigation.navigate("Cart")
  }

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
      setSelectedCategory(response.data[0]);
    } catch (error) {
      console.log("Error fetching categories", error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchProductsByCategory = async (category: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={homeStyle.card}>
      <Image source={{ uri: item.image }} style={homeStyle.image} />

      <View style={homeStyle.cardContent}>
        <Text style={homeStyle.title}>{item.title}</Text>
        <Text style={homeStyle.price}>${item.price}</Text>
        <Text style={homeStyle.description}>{item.description}</Text>
        <Text style={homeStyle.category}>Category: {item.category}</Text>
        <Text style={homeStyle.rating}>
          Rating: {item.rating.rate} ⭐ ({item.rating.count})
        </Text>
      </View>

      <TouchableOpacity style={homeStyle.addButton} onPress={() => addToCart(item)}>
        <Text style={homeStyle.addButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={homeStyle.container}>
      <Text style={homeStyle.header}>Fake Store</Text>

      <TouchableOpacity
        style={homeStyle.addButton}
        onPress={handleLogout}
      >
        <Text style={homeStyle.addButtonText}>
        Log Out
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={homeStyle.addButton}
        onPress={handleCart}
      >
        <Text style={homeStyle.addButtonText}>
        Go to cart
        </Text>
      </TouchableOpacity>
      
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={homeStyle.picker}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat} label={cat} value={cat} />
        ))}
      </Picker>

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      )}

      <View style={homeStyle.footer}>
        <Text style={homeStyle.footerText}>Primera prueba parcial</Text>
        <Text style={homeStyle.footerText}>Desarrollada por:</Text>
        <Text style={homeStyle.footerText}>José Pablo Luna Vargas</Text>
      </View>
    </View>
  );
};

export default Home;