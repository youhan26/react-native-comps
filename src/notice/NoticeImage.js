import React from 'react';
import {Image, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {noticeTypes} from "./Notice";

const images = {
  [noticeTypes.info]: require('./image/notice_warn.png'),
  [noticeTypes.fail]: require('./image/notice_fail.png'),
  [noticeTypes.success]: require('./image/notice_success.png'),
  [noticeTypes.warn]: require('./image/notice_warn.png'),
};

export const getImageSrc = (noticeType) => {
  return images[noticeType];
};

const NoticeImage = ({noticeType, icon}) => {
  if (!icon && noticeType === noticeTypes.loading) {
    return <ActivityIndicator style={styles.image} />;
  }
  const source = icon ? {uri: icon} : getImageSrc(noticeType);
  
  return <Image source={source} style={styles.image} />;
};

NoticeImage.propTypes = {
  noticeType: PropTypes.string,
  icon: PropTypes.string,
};

NoticeImage.defaultProps = {
  noticeType: null,
  icon: null
};

export default NoticeImage;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});