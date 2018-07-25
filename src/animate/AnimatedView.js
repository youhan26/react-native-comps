import React from 'react';
import {Animated, DeviceEventEmitter, Easing, Text} from 'react-native';

const defaultOptions = {
  from: {
    x: 0,
    y: 0,
  },
  to: {
    x: 0,
    y: 0,
  },
  fromNode: null,
  toNode: null,
  element: <Text>some thing</Text>,
  duration: 1000,
  easing: Easing.inOut(Easing.back())
};

export default class AnimatedView extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.timer = new Animated.Value(0);
    this.config = {...defaultOptions};
    
    this.state = {
      visible: false
    };
    
    this.stopAnimated = this.stopAnimated.bind(this);
    this.startAnimated = this.startAnimated.bind(this);
    this.start = this.start.bind(this);
    this.measureNode = this.measureNode.bind(this);
  }
  
  componentDidMount() {
    DeviceEventEmitter.addListener('$animate-show', this.startAnimated);
    DeviceEventEmitter.addListener('$animate-close', this.stopAnimated);
  }
  
  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('$animate-show');
    DeviceEventEmitter.removeAllListeners('$animate-close');
  }
  
  measureNode(node, defaultPosition) {
    return new Promise((resolve) => {
      if (node) {
        node.measure((a, b, px, py, fx, fy) => {
          resolve({x: fx, y: fy});
        });
      } else {
        resolve(defaultPosition || {x: 0, y: 0});
      }
    });
  }
  
  startAnimated(options, callback) {
    this.config = {
      ...defaultOptions,
      ...options,
      callback
    };
    
    const {fromNode, toNode, from, to} = this.config;
    
    Promise.all([this.measureNode(fromNode, from), this.measureNode(toNode, to)])
      .then(([fromPosition, toPosition]) => {
        this.config = {
          ...this.config,
          from: fromPosition,
          to: toPosition
        };
        
        this.animateRef && this.animateRef.stopAnimated();
        this.setState({visible: true}, () => {
          this.start();
        });
      });
  }
  
  stopAnimated(after) {
    this.animateRef && this.animateRef.stopAnimated();
    this.setState({visible: false}, () => {
      after && after();
    });
  }
  
  start() {
    const {duration, easing, callback} = this.config;
    this.timer.setValue(0);
    this.animateRef = Animated.timing(this.timer,
      {
        toValue: 1,
        duration: duration,
        easing: easing
      }
    ).start(() => {
      this.setState({visible: false}, () => {
        callback && callback();
      });
    });
  }
  
  render() {
    if (!this.state.visible) {
      return null;
    }
    
    const {from, to, element} = this.config;
    
    this.x = this.timer.interpolate({
      inputRange: [0, 1],
      outputRange: [from.x, to.x],
    });
    this.y = this.timer.interpolate({
      inputRange: [0, 1],
      outputRange: [from.y, to.y],
    });
    this.scale = this.timer.interpolate({
      inputRange: [0, 1],
      outputRange: [2, 0],
    });
    
    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: this.x,
          top: this.y,
          transform: [
            {scale: this.scale}
          ]
        }}
      >
        {element}
      </Animated.View>
    );
  }
}