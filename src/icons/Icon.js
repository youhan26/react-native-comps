import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from 'react-native';
import Image from '../image/Image';
import IMAGE from "../asserts/imageConstant";

const Icon = ({name, ...others}) => {
  if (!name) {
    return <Text>?</Text>
  }
  
  return (
    <Image
      source={IMAGE[name]}
      {...others}
    />
  );
};


Icon.propTypes = {
  name: PropTypes.oneOf([
    'left',
    'left-white',
    'right',
    'up',
    'down',
    'copy',
    'scan',
    'female',
    'male',
    'card',
    'message',
    'remove',
    'clean',
    'more',
    'more-c',
    'search',
    'location',
    'selected',
    'emoji',
    'share',
    'bookmark',
    'social-moments',
    'social-moments-c',
    'social-wechat',
    'social-qq',
    'social-alipay',
    'social-weibo',
    'social-wechat-s',
    'social-wechat-c',
  ])
};

Icon.defaultProps = {
  name: null
};

export default Icon;
