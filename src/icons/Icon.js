import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
} from 'react-native';
import Image from '../image/Image';
import IMAGE from "../asserts/imageConstant";


class Icon extends React.PureComponent {
  constructor(props) {
    super(props);
  
    this.setNativeProps = this.setNativeProps.bind(this);
  }
  
  setNativeProps(props){
    this.ref && this.ref.setNativeProps(props);
  }
  
  render() {
    const {name, ...others} = this.props;
    
    if (!name && !source) {
      return <Text>?</Text>
    }
    
    return (
      <Image
        source={IMAGE[name]}
        {...others}
        ref={(ref) => {
          this.ref = ref;
        }}
      />
    );
  }
}


Icon.propTypes = {
  name: PropTypes.oneOf([
    'left',
    'left-white',
    'right',
    'up',
    'down',
    'copy',
    'close',
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
    'phone',
    'location',
    'location-small',
    'selected',
    'emoji',
    'share',
    'share-white',
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
