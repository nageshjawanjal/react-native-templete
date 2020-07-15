import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '@home/Home';
import Login from '@login/Login';
import Header from '@header/Header';
import { HOME_KEY, LOGIN_KEY, HEADER_KEY} from '@abcd/Routes';

const AppNavigator = createStackNavigator({
  [HOME_KEY]: {
    screen: Home,
  },
  [LOGIN_KEY]: {
    screen: Login,
  }
},
{
  headerMode:'none',
  initialRouteName:LOGIN_KEY
}
);

export default createAppContainer(AppNavigator);