import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '@/constants/colors';
import { forwardRef } from 'react';

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.tint,
    paddingVertical: 18,
    paddingHorizontal: 40,
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 20,
    width: '100%',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default Button;