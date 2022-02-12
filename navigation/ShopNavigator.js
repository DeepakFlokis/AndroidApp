import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

const ProductsNavigator = createStackNavigator({
    ProductOverviewScr: ProductOverviewScreen,
    ProductDetailsScr : ProductDetailsScreen
},
{
    defaultNavigatorOption: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android'? Colors.primary : '' 
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(ProductsNavigator);