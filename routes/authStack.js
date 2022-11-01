import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Splash from '../screens/Splash';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import PostAuth from '../screens/PostAuth';

const screens = {
    Splash: {
        screen: Splash,
        navigationOptions: {
            headerShown: false
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            headerShown: false
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            headerShown: false
        }
    },
    PostAuth: {
        screen: PostAuth,
        navigationOptions: {
            headerShown: false
        }
    }
}

const AuthStack = createStackNavigator(screens);
export default createAppContainer(AuthStack);