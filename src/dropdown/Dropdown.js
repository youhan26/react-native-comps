/**
 * Created by youhan on 2017/8/2.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import Image from "../image/Image";
import IMAGE from "../asserts/imageConstant";

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 12,
    paddingRight: 12
  },
  title: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  list: {
    maxHeight: 440,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  selectItem: {
    backgroundColor: '#dbdbdb'
  },
  itemText: {
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
    height: 40,
    lineHeight: 40
  },
  selectText: {
    fontSize: 16
  },
  icon: {
    marginLeft: 12
  },
  hiddenContainer: {
    position: 'absolute',
    top: 44,
    left: 0,
    right: 0,
    height: height - 64
  },
});

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      key: null,
      name: this.props.blank,
      show: false
    };
    
    this.updateValue = this.updateValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.renderList = this.renderList.bind(this);
    this.closeList = this.closeList.bind(this);
    
    this.renderSelectable = this.renderSelectable.bind(this);
  }
  
  componentDidMount() {
    const {value} = this.props;
    this.updateValue(value);
  }
  
  updateValue(value, name = this.props.blank, option) {
    if (value !== this.state.key) {
      this.props.onChange(value);
      if (name) {
        this.setState(() => {
          return {value, name, ...option};
        });
      }
      
      let result = this.props.data.find((item) => {
        return item.key === value;
      });
      
      if (!result) {
        result = {key: value, name};
      }
      
      this.setState(() => {
        return {...result, ...option};
      });
    }
  }
  
  handleClick() {
    this.setState(() => {
      return {show: !this.state.show};
    });
  }
  
  closeList() {
    this.setState(() => {
      return {show: false};
    });
  }
  
  selectItem(item) {
    this.updateValue(item.key, item.name, {show: false});
  }
  
  renderList() {
    const {data, blank} = this.props;
    return (
      <View
        style={styles.list}
      >
        <ScrollView
          bounces={false}
          style={styles.shadow}
        >
          {[{name: blank, key: null}].concat(data).map((item) => {
            return (
              <TouchableOpacity
                key={item.key}
                onPress={() => {
                  this.selectItem(item);
                }}
              >
                <View style={item.key === this.state.key ? styles.selectItem : {}}>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
  
  renderSelectable() {
    return (
      <TouchableOpacity
        onPress={this.handleClick}
      >
        <View style={styles.select}>
          <Text style={styles.selectText}>{this.state.name}</Text>
          {this.state.show ? <Image source={IMAGE.up} style={styles.icon} /> :
            <Image source={IMAGE.down} style={styles.icon} />}
        </View>
      </TouchableOpacity>
    );
  }
  
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.title}>
          {this.renderSelectable()}
          {this.props.right}
        </View>
        {this.state.show ?
          <TouchableWithoutFeedback
            onPress={() => {
              this.closeList();
            }}
          >
            <View style={styles.hiddenContainer}>
              <Separator />
              {this.renderList()}
            </View>
          </TouchableWithoutFeedback>
          : null
        }
      </View>
    );
  }
  
}


Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  })),
  onChange: PropTypes.func,
  value: PropTypes.string,
  blank: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
  data: [],
  onChange: () => {},
  value: ''
};
