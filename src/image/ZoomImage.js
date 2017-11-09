/**
 * Created by youhan on 2017/3/15.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import Image from "./Image";

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ZoomImage = ({maximumZoomScale, minimumZoomScale, style, ...others}) => {
  return (
    <ScrollView
      contentContainerStyle={[styles.root, style]}
      centerContent={true}
      maximumZoomScale={maximumZoomScale}
      minimumZoomScale={minimumZoomScale}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Image {...others} style={style} />
    </ScrollView>
  );
};

ZoomImage.propTypes = {
  maximumZoomScale: PropTypes.number,
  minimumZoomScale: PropTypes.number
};

ZoomImage.defaultProps = {
  maximumZoomScale: 3,
  minimumZoomScale: 1
};

export default ZoomImage;
