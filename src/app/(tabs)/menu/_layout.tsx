// RULE: If you add a new screen inside menu/, set its title here or inside the screen file.

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack } from "expo-router";
import { Pressable, useColorScheme } from 'react-native';
import Colors from '../../../constants/colors';
export default function MenuStack() {
  const colorScheme = useColorScheme();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
         title: 'Menu',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Link href="../modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="[id]" options={{ headerShown: true }} />
    </Stack>
  );
}