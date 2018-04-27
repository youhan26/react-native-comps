/**
 * Created by youhan on 2017/10/13.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl
} from 'react-native';
import UTILS from 'mimikiy-utils';

class BaseList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      allowLoad: true
    };
    
    this.onEndReach = this.onEndReach.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.load = this.load.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.setNativeProps = this.setNativeProps.bind(this);
    this.getScrollResponder = this.getScrollResponder.bind(this);
  }
  
  componentDidMount() {
    if (this.props.initLoad) {
      this.load(false);
    }
  }
  
  scrollTo(option) {
    if (this.ref) {
      this.ref.scrollToOffset(option);
    }
  }
  
  setNativeProps(props) {
    this.ref.setNativeProps(props);
  }
  
  getScrollResponder() {
    return this.ref.getScrollResponder();
  }
  
  load(isPull) {
    const {allowLoad} = this.state;
    if (!allowLoad && isPull) {
      return;
    }
    
    const {total, data, loading} = this.props;
    if (loading) {
      return;
    }
    if (isPull && total !== 0 && total === data.length) {
      return;
    }
    
    this.props.onLoad(isPull);
    this.setState({allowLoad: false});
  }
  
  onEndReach() {
    this.load(true);
  }
  
  onRefresh() {
    this.load(false);
  }
  
  render() {
    const {renderSeparator, viewRef, data, empty, loading, footer, header, keyExtractor, ...others} = this.props;
    
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={this.onRefresh}
          />
        }
        onContentSizeChange={() => {
          this.setState({allowLoad: true});
        }}
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
        ref={(ref) => {
          this.ref = ref;
          viewRef && viewRef(ref);
        }}
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
  renderItem: PropTypes.func,
  viewRef: PropTypes.func,
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
  renderSeparator: () => {
    return null;
  },
  renderItem: () => {
    return null;
  },
  viewRef: () => {
  
  }
};

export default BaseList;