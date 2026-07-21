import { Redirect, Stack } from 'expo-router';

export default function TabIndex() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Redirect href="/menu/" />
    </>
  );
}