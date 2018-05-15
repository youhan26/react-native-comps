import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

import NoticeImage from "./NoticeImage";
import {noticeTypes} from "./Notice";

const colors = {
  [noticeTypes.info]: '#5084ef',
  [noticeTypes.warn]: '#FF9F35',
  [noticeTypes.success]: '#48CB25',
  [noticeTypes.fail]: '#FF5656',
  [noticeTypes.loading]: '#5084ef',
};

class DropDownNotice extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      animationValue: new Animated.Value(0),
    };
  }
  
  componentDidMount() {
    Animated.spring(this.state.animationValue, {
      toValue: 1,
      duration: 450,
      friction: 9,
      useNativeDriver: true,
    }).start();
    
    const {interval} = this.props;
    if (interval) {
      setTimeout(() => {
        Animated.spring(this.state.animationValue, {
          toValue: 0,
          duration: 450,
          friction: 9,
          useNativeDriver: true,
        }).start();
      }, interval - 900);
    }
  }
  
  render() {
    const {data} = this.props;
    
    const {
      icon,
      title,
      subTitle,
      noticeType
    } = data;
    
    const wrapperStyle = {
      transform: [
        {
          translateY: this.state.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 82],
          }),
        },
      ],
      backgroundColor: colors[noticeType]
    };
    
    return (
      <Animated.View style={[styles.container, wrapperStyle]}>
        <View style={styles.imageContainer}>
          <NoticeImage icon={icon} noticeType={noticeType} />
        </View>
        <View style={styles.right}>
          <Text style={{color: 'white', fontSize: 19}}>{title}</Text>
          {subTitle ?
            <Text style={{color: 'white', fontSize: 14, marginTop: 5}}>{subTitle}</Text> : null
          }
        </View>
      </Animated.View>
    );
  }
}

export default DropDownNotice;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -82,
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
    height: 82
  },
  imageContainer: {
    marginLeft: 12,
    marginRight: 12,
  },
  right: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }
});