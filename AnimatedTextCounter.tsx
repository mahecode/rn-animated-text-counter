import React, {useEffect, useState, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface TextCounterProps {
  from: number;
  to: number;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

interface DigitProps {
  index: number;
  animatedValues: Animated.Value[];
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const calculateInitialPositions = (
  fromFormatted: string,
  toFormatted: string,
): number[] =>
  toFormatted.split('').map((digit, index) => {
    const fromDigit = parseInt(fromFormatted[index] || '0', 10);
    const toDigit = parseInt(digit, 10);
    if (!isNaN(toDigit)) {
      const difference = toDigit - fromDigit;
      return (
        -(
          fromDigit +
          ((difference > 0 && difference <= 5) || difference < -5 ? 0 : 10)
        ) * 30
      );
    }
    return 0;
  });

const useAnimatedValues = (
  from: number,
  to: number,
): {animatedValues: Animated.Value[]; toFormatted: string} => {
  const fromFormatted = useMemo(
    () => new Intl.NumberFormat('en-IN').format(from),
    [from],
  );
  const toFormatted = useMemo(
    () => new Intl.NumberFormat('en-IN').format(to),
    [to],
  );
  const [animatedValues, setAnimatedValues] = useState<Animated.Value[]>([]);

  useEffect(() => {
    const initialValues = calculateInitialPositions(fromFormatted, toFormatted);
    const newAnimatedValues = initialValues.map(
      initialValue => new Animated.Value(initialValue),
    );

    setAnimatedValues(newAnimatedValues);

    newAnimatedValues.forEach((animValue, index) => {
      if (!isNaN(parseInt(toFormatted[index]))) {
        Animated.timing(animValue, {
          toValue: -parseInt(toFormatted[index], 10) * 30,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }
    });
  }, [fromFormatted, toFormatted]);

  return {animatedValues, toFormatted};
};

const AnimatedDigit: React.FC<DigitProps> = ({index, animatedValues, textStyle}) => (
  <View key={index} style={styles.digitContainer}>
    <Animated.View
      style={{
        height: 300,
        transform: [{translateY: animatedValues[index] || 0}],
      }}>
      {Array.from({length: 10}).map((_, num) => (
        <Text key={num} style={[styles.digit, textStyle]}>
          {num}
        </Text>
      ))}
    </Animated.View>
  </View>
);

const AnimatedTextCounter: React.FC<TextCounterProps> = ({
  from,
  to,
  containerStyle,
  textStyle = {
    fontSize: 24,
    lineHeight: 30,
  },
}) => {
  const {animatedValues, toFormatted} = useAnimatedValues(from, to);

  return (
    <View style={[styles.container, containerStyle]}>
      {toFormatted.split('').map((digit, index) =>
        isNaN(parseInt(digit)) ? (
          <Text key={index} style={[textStyle, styles.digit]}>
            {digit}
          </Text>
        ) : (
          <AnimatedDigit
            index={index}
            animatedValues={animatedValues}
            textStyle={textStyle}
          />
        ),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  digitContainer: {
    height: 30,
    overflow: 'hidden',
    width: 18,
  },
  digit: {
    height: 30,
    textAlign: 'center',
  }
});

export default AnimatedTextCounter;
