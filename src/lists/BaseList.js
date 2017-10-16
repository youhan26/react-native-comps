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
    this.onRefresh = this.onRefresh.bind(this);
  }
  
  onEndReach() {
    if (!this.props.loading) {
      this.props.onLoad(true);
    }
  }
  
  onRefresh(){
    if (!this.props.loading) {
      this.props.onLoad();
    }
  }
  
  render() {
    const {renderSeparator, data, empty, loading, footer, header, keyExtractor, ...others} = this.props;
    
    
    return (
      <FlatList
        data={data}
        ItemSeparatorComponent={renderSeparator}
        initialNumToRender={10}
        keyExtractor={keyExtractor}
        extraData={this.state}
        horizontal={false}
        ListEmptyComponent={empty}
        ListFooterComponent={footer}
        ListHeaderComponent={header}
        onEndReached={this.onEndReach}
        onEndReachedThreshold={0.5}
        onRefresh={this.onRefresh}
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
  footer: PropTypes.node,
  header: PropTypes.node,
  onLoad: PropTypes.func,
  renderSeparator: PropTypes.func
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
  onLoad: UTILS.noop,
  renderSeparator: null
};

export default BaseList;