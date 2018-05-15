import React, {PureComponent} from 'react';
import {View, Text, Image, Modal} from 'react-native';
import Square from "./Square";

/**
 * SquareNoticeWithBlock
 */
const SquareNoticeWithBlock = ({data}) => {
  return (
    <Modal
      transparent={true}
      visible={true}
    >
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Square data={data} />
      </View>
    </Modal>
  );
};

export default SquareNoticeWithBlock;