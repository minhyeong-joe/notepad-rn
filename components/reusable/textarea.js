import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const TextArea = (props) => {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        autoCorret={false}
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        underlineColorAndroid='transparent'
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
        autoGrow={props.autoGrow}
        multiline={true}
        blurOnSubmit={!props.returnNewLine}
        maxLength={props.maxLength}
        maxHeight={props.maxHeight}
        autoCapitalize={'sentences'}
        editable={true}
      />
    </View>
  );
};

const styles=StyleSheet.create({
  field: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  label: {
    marginLeft: 10,
    flex: 1,
    alignSelf:'flex-start'
  },
  input: {
    height: 120,
    textAlignVertical: 'top',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 2,
  }
});

export { TextArea };
