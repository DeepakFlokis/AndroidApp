import React from 'react';
import { ScrollView , View , Text ,Image ,Button , StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailsScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct =  useSelector(state => {
      return state.productsRdc.availableProducts.find(prod => prod.id === productId )
    })
 return (
     <View>
         <Text>This is the Details of {selectedProduct.title}</Text>
     </View>
 )
}

ProductDetailsScreen.navigationOptions = navData =>{
    return {
        headerTitle : navData.navigation.getParam('title')
    }
}

const style = StyleSheet.create({});

export default ProductDetailsScreen;