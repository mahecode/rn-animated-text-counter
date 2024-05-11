import {FC} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

interface TextCounterProps {
  from: number;
  to: number;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

declare const AnimatedTextCounter: FC<TextCounterProps>;
export default AnimatedTextCounter;
