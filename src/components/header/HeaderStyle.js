import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container:{
        height:hp(5), 
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:.5
    }
})