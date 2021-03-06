import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const ProductItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.product}>
      <TouchableCmp onPress={props.onViewDetails} useForeground>
        <View style={styles.touchable}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
          </View>
          <View style={styles.actions}>
            <Button title="View Details" onPress={props.onViewDetails} />
            <Button title="To cart" onPress={props.onAddToCart} />
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};
const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
});

export default ProductItem;
