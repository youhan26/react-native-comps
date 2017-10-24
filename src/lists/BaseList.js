/**
 * Created by youhan on 2017/10/13.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl
} from 'react-native';
import UTILS from 'mimikiy-utils';

class BaseList extends PureComponent {
  constructor(props) {
    super(props);
    
    this.onEndReach = this.onEndReach.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.load = this.load.bind(this);
  }
  
  componentDidMount() {
    if (this.props.initLoad) {
      this.load(false);
    }
  }
  
  load(isPull) {
    const {total, data, loading} = this.props;
    if (loading) {
      return;
    }
    if (isPull && total !== 0 && total === data.length) {
      return;
    }
    
    this.props.onLoad(isPull)
  }
  
  onEndReach() {
    this.load(true);
  }
  
  onRefresh() {
    this.load(false);
  }
  
  render() {
    const {renderSeparator, data, empty, loading, footer, header, keyExtractor, ...others} = this.props;
    
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={this.onRefresh}
          />
        }
        data={data}
        initialNumToRender={1}
        keyExtractor={keyExtractor}
        onEndReached={this.onEndReach}
        onEndReachedThreshold={0}
        scrollEventThrottle={16}
        ItemSeparatorComponent={renderSeparator}
        horizontal={false}
        ListEmptyComponent={empty}
        ListFooterComponent={footer}
        ListHeaderComponent={header}
        {...others}
      />
    );
  }
}

BaseList.propTypes = {
  loading: PropTypes.bool,
  initLoad: PropTypes.bool,
  keyExtractor: PropTypes.func,
  data: PropTypes.array,
  empty: PropTypes.node,
  footer: PropTypes.node,
  header: PropTypes.node,
  onLoad: PropTypes.func,
  renderSeparator: PropTypes.func,
  total: PropTypes.number,
};

BaseList.defaultProps = {
  loading: false,
  initLoad: true,
  keyExtractor: function (item) {
    return item.key;
  },
  data: [],
  empty: null,
  footer: null,
  header: null,
  onLoad: UTILS.noop,
  total: 0,
  renderSeparator: null
};

export default BaseList;