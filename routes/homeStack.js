import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    // Primera pagina a mostrar
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />,
            }
        }
    },
    // Paginas que se van apilando encima de la principal en orden
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default HomeStack;