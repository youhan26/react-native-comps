/**
 * Created by youhan on 2017/10/13.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import UTILS from 'mimikiy-utils';

class BaseList extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {};
    
    this.onEndReach = this.onEndReach.bind(this);
  }
  
  onEndReach() {
    this.props.onRefresh(true);
  }
  
  render() {
    const {data, empty, loading, footer, header, onLoad, keyExtractor, ...others} = this.props;
    
    
    return (
      <FlatList
        data={data}
        initialNumToRender={10}
        keyExtractor={keyExtractor}
        extraData={this.state}
        horizontal={false}
        ListEmptyComponent={empty}
        ListFooterComponent={footer}
        ListHeaderComponent={header}
        onEndReached={this.onEndReach}
        onEndReachedThreshold={5}
        onRefresh={onLoad}
        refreshing={loading}
        scrollEventThrottle={16}
        {...others}
      />
    );
  }
}

BaseList.propTypes = {
  loading: PropTypes.bool,
  keyExtractor: PropTypes.func,
  data: PropTypes.array,
  empty: PropTypes.node,
  footer : PropTypes.node,
  header: PropTypes.node,
  onLoad: PropTypes.func
};

BaseList.defaultProps = {
  loading: false,
  keyExtractor: function (item) {
    return item.key;
  },
  data: [],
  empty: null,
  footer: null,
  header: null,
  onLoad: UTILS.noop
};

export default BaseList;