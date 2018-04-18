/**
 * Created by youhan on 2017/9/27.
 */
import React from 'react';
import {Image as BaseImage, View, StyleSheet, Text, ActivityIndicator} from 'react-native';

class Image extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      error: false
    };
    
    this.onError = this.onError.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onLoadStart = this.onLoadStart.bind(this);
    this.onLoadEnd = this.onLoadEnd.bind(this);
    this.setNativeProps = this.setNativeProps.bind(this);
  }
  
  onError() {
    this.setState({
      error: true,
      loading: false
    });
  }
  
  onLoad() {
    this.setState({
      loading: false,
      error: false
    })
  }
  
  onLoadStart() {
    this.setState({
      loading: true,
      error: false
    });
  }
  
  onLoadEnd() {
    this.setState({
      loading: false
    });
  }
  
  setNativeProps(props) {
    this.ref && this.ref.setNativeProps(props);
  }
  
  render() {
    const {source, style, containerStyle, resizeMode, ...others} = this.props;
    if (!source || (typeof source === 'object' && (!source.uri))) {
      return <View style={style} />;
    }
    const {error, loading} = this.state;
    
    
    if(error){
      return (
        <View style={[styles.image, styles.view, style]}>
          <Text>加载失败</Text>
        </View>
      );
    }
    
    return (
      <View
        style={[styles.image, containerStyle]}
        ref={(ref) => {
          if (ref) {
            this.ref = ref;
          }
        }}
      >
        <BaseImage
          {...others}
          source={source}
          style={[styles.image, style]}
          resizeMode={resizeMode || 'cover' || 'contain'}
          onError={this.onError}
          onLoad={this.onLoad}
          onLoadStart={this.onLoadStart}
          onLoadEnd={this.onLoadEnd}
        />
        {loading ?
          <View style={[styles.image, styles.view, style]}>
            <ActivityIndicator
              animating={true}
              size={'small'}
            />
          </View> : null
        }
      </View>
    );
  }
}

Image.propTypes = {
  containerStyle: View.propTypes.style,
  style: BaseImage.propTypes.style,
  resizeMode: BaseImage.propTypes.resizeMode,
};

const styles = StyleSheet.create({
  image: {},
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 100,
    height: 100
  }
});

export default Image;
