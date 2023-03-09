import { BlurView } from 'expo-blur'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=70' }}
        resizeMode='cover'
        style={[StyleSheet.absoluteFill]}
      />
      <BlurView intensity={100} style={styles.blurView}>
        <Text style={styles.text}>Hello World!</Text>
      </BlurView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurView: {
    padding: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
})
