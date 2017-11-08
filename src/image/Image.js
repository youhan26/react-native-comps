/**
 * Created by youhan on 2017/9/27.
 */
import React from 'react';
import {Image as BaseImage, View} from 'react-native';

const Image = (props) => {
  const {source, style} = props;
  if (!source || (typeof source === 'object' && (!source.uri))) {
    return <View style={style} />;
  }
  return <BaseImage {...props} />;
};

export default Image;
