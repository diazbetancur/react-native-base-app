import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: Colors.BLACK,
    },
    textTitle: {
        color: Colors.BLACK,
        fontWeight: 'bold',
        fontSize:  24,
    }
  });