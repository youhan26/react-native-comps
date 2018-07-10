/**
 * Created by youhan on 2017/2/8.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  ViewPropTypes,
  Dimensions
} from 'react-native';
import BaseTabView from "./BaseTabView";
import COLOR from "../asserts/colorConstant";

const {width} = Dimensions.get('window');

class ScrollListTab extends Component {
  constructor(props) {
    super(props);
    
    this.renderScene = this.renderScene.bind(this);
    this.getTabBarProps = this.getTabBarProps.bind(this);
  }
  
  renderScene(route) {
    if (route.renderScene) {
      return route.renderScene({style: this.props.listStyle});
    }
    return null;
  }
  
  getTabBarProps() {
    const length = this.props.items.length;
    const {tabWidth, indicatorWidth} = this.props;
    
    return {
      tabStyle: {width: tabWidth || width / length},
      renderLabel: ({focused, route}) => {
        return (
          <Text
            style={{fontSize: 14, color: focused ? COLOR.title5474E8 : COLOR.title575757}}>
            {route.title}
          </Text>
        );
      },
      useNativeDriver: true,
      style: {
        height: 35,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor:
        COLOR.bgccc,
        justifyContent: 'center',
        alignItems: 'center'
      },
      indicatorStyle: {
        width: indicatorWidth || (width / length - 20),
        height: 2,
        backgroundColor: COLOR.title5474E8,
        justifyContent: 'center',
        marginLeft: ((tabWidth || (width / length)) - (indicatorWidth || (width / length - 20))) / 2,
        marginBottom: 4
      }
    };
  }
  
  render() {
    const {items, tabKey} = this.props;
    
    return (
      <View style={[{flex: 1, backgroundColor: 'white'}, this.props.style]}>
        <BaseTabView
          routes={items.map((item) => {
            return {key: item[tabKey], ...item};
          })}
          renderScene={this.renderScene}
          tabBarProps={this.getTabBarProps()}
        />
      </View>
    );
  }
}


ScrollListTab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    renderScene: PropTypes.func.isRequired,
  })).isRequired,
  listStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  tabKey: PropTypes.string,
  tabWidth: PropTypes.number,
  indicatorWidth: PropTypes.number,
};

ScrollListTab.defaultProps = {
  listStyle: {},
  style: {},
  tabKey: 'key',
  tabWidth: null,
  indicatorWidth: null
};

export default ScrollListTab;
