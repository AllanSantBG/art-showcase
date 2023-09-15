import { Button, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/island.png')} />
      <Image style={styles.image} source={require('../assets/car.png')} />
      <Button
        title="Click"
        color="#2A9D8F"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    margin: 12,
    height: 200,
    width: 250,
  }
});
