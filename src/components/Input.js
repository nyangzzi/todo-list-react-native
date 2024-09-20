import { StyleSheet, TextInput, View, Text } from 'react-native';
import PropTypes, { object } from 'prop-types';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyType = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({ title, placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        {...props}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#a3a3a3'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
    </View>
  );
};

Input.defaultProps = {
  returnKeyType: ReturnKeyType.DONE,
};

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    height: 42,
  },
});

export default Input;
