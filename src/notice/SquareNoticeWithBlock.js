import React from 'react';
import {View} from 'react-native';
import Square from "./Square";


/**
 * SquareNoticeWithBlock
 */
const SquareNoticeWithBlock = ({data}) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }}>
      <Square data={data} />
    </View>
  );
};

export default SquareNoticeWithBlock;