/**
 * Created by youhan on 2017/8/8.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Dimensions,
  ViewPropTypes
} from 'react-native';
import {TabViewAnimated, TabBar} from 'react-native-tab-view';
import autobind from "autobind-decorator";

const {width} = Dimensions.get('window');

export default class BaseTabView extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      index: 0,
      routes: this.props.routes || this.genIndexTitle(this.props.titles),
    };
  }
  
  genIndexTitle(titles) {
    return titles.map((title, index) => {
      return {
        key: `${index + 1}`,
        title
      };
    });
  }
  
  @autobind
  handleIndexChange(index) {
    this.setState({index});
  }
  
  @autobind
  renderHeader(props) {
    return (
      <TabBar
        {...props}
        scrollEnabled={true}
        useNativeDriver={true}
        {...this.props.tabBarProps}
      />
    );
  }
  
  @autobind
  renderScene({route}) {
    return this.props.renderScene(route);
  }
  
  render() {
    return (
      <TabViewAnimated
        style={styles.root}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
        initialLayout={{height: 0, width}}
      />
    );
  }
}

BaseTabView.propTypes = {
  renderScene: PropTypes.func.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string),
  tabBarProps: PropTypes.shape({
    tabStyle: ViewPropTypes.style,
    renderLabel: PropTypes.func,
    style: ViewPropTypes.style,
    indicatorStyle: ViewPropTypes.style,
  }),
  routes: PropTypes.arrayOf(PropTypes.shape()),
};

BaseTabView.defaultProps = {
  renderHeader: () => {
  },
  routes: []
};

const styles = StyleSheet.create({
  root: {
    width,
    flex: 1,
    backgroundColor: 'white'
  }
});