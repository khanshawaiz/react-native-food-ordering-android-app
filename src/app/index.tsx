import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Pressable, Text } from 'react-native';

export default function RootIndex() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Link href="/(user)" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>User</Text>
        </Pressable>
      </Link>
      <Link href="/(admin)" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Admin</Text>
        </Pressable>
      </Link>
      {/* ADD THIS BLOCK */}
      <Link href="/sign-in" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#2f95dc',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});