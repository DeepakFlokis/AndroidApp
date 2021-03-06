import  React  from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.productsRdc.availableProducts);
    return <FlatList data={products} 
    keyExtractor={item => item.id}
    renderItem={itemData => <ProductItem imageUrl={itemData.item.imageUrl} title={itemData.item.title} 
    price={itemData.item.price} 
    onViewDetails={() =>{
        props.navigation.navigate('ProductDetailsScr',{
            productId : itemData.item.id,
            title : itemData.item.title
        })
    }} onAddToCart={() =>{}}/> 
}/>
}
ProductOverviewScreen.navigationOptions = {
    headerTitle : 'All Products'
}
export default ProductOverviewScreen;