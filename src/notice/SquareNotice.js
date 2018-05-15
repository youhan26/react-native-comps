import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Square from "./Square";

const {width, height} = Dimensions.get('window');

/**
 * SquareNotice
 */
const SquareNotice = ({data}) => {
  return (
    <View style={styles.container}>
      <Square data={data} />
    </View>
  );
};

export default SquareNotice;


const styles = StyleSheet.create({
  container: {
    position: 'absolute', left: (width - 120) / 2, top: (height - 120) / 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});