import { Text, SafeAreaView, StyleSheet, Image} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#264653',
    padding: 8,
  },
  logo: {
    width: 400,
    height: 200,
  },
});
