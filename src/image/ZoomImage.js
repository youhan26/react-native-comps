/**
 * Created by youhan on 2017/3/15.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Image} from 'react-native';
import CachedImage from 'react-native-cached-image';
import BasicStyle from '../../utils/style';

const ZoomImage = (props) => {
  return (
    <ScrollView
      contentContainerStyle={BasicStyle.center()}
      centerContent={true}
      maximumZoomScale={props.maximumZoomScale}
      minimumZoomScale={props.minimumZoomScale}
      showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator}
    >
      {props.useCache ?
        <CachedImage {...props} /> :
        <Image {...props} />
      }
    </ScrollView>
  );
};

ZoomImage.propTypes = {
  useCache: PropTypes.bool,
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  maximumZoomScale: PropTypes.number,
  minimumZoomScale: PropTypes.number
};

ZoomImage.defaultProps = {
  useCache: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  maximumZoomScale: 3,
  minimumZoomScale: 1
};

export default ZoomImage;
