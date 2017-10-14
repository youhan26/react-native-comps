/**
 * Created by youhan on 2017/10/14.
 */
import React from 'react';
import {
  RefreshControl as OriRefreshControl,
  View,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

const RefreshControl = ({...customView, ...others}) => {
  return (
    <View>
      {customView ? customView :
        <View>
          <Text> this is custom control</Text>
        </View>
      }
      <OriRefreshControl {...others} />
    </View>
  );
};

RefreshControl.propTypes = {
  customView: PropTypes.node
};

RefreshControl.defaultProps = {
  customView: null
};

export default RefreshControl;
