import { View, StyleSheet, Image } from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/main.png')}
        style={styles.image}
        resizeMode={'cover'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
