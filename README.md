# Animated Text Counter

Animated Text Counter is a React Native component that animates numbers with a slot machine effect, suitable for creating visually appealing numeric transitions. This library is easy to integrate and customizable to fit the styling needs of your mobile application.

## Installation

To install the Animated Text Counter, you need to run the following command using npm:

```bash
npm install rn-animated-text-counter
```

Or using yarn:

```bash
yarn add rn-animated-text-counter
```
## Demo

Watch this quick demo to see the Animated Text Counter in action:

https://github.com/mahecode/rn-animated-text-counter/assets/29339474/68f3c41a-4f02-42fe-ac5b-0e66a6415c3d

## Usage

Here is a simple example of how to use the Animated Text Counter in your React Native application:

```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedTextCounter from 'rn-animated-text-counter';

const App = () => {
  return (
    <View style={styles.container}>
      <AnimatedTextCounter from={0} to={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
```

## Props

The following props are available to customize the Animated Text Counter:

| Prop            | Type   | Description                              | Default  |
|-----------------|--------|------------------------------------------|----------|
| `from`          | number | The initial value of the counter.        | `0`      |
| `to`            | number | The final value of the counter.          | Required |
| `style`         | object | Custom style for the container view.     | `{}`     |
| `textStyle`     | object | Custom style for the text component.     | `{}`     |
| `containerStyle`| object | Custom style for the parent container.   | `{}`     |



## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for bugs, features, or improvements.

## License

Animated Text Counter is [MIT licensed](./LICENSE).





