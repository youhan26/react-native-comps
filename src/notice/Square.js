import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import NoticeImage from "./NoticeImage";


const Square = ({data, style}) => {
  const {
    icon,
    title,
    subTitle,
    noticeType,
  } = data;
  
  return (
    <View style={[styles.container, style]}>
      {noticeType || icon ?
        <View style={styles.imageView}>
          <NoticeImage noticeType={noticeType} icon={icon} />
        </View> : null
      }
      <View style={styles.textContainer}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.subTitle]}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

Square.propTypes = {
  data: PropTypes.shape({}),
};

Square.defaultProps = {
  data: {},
};

export default Square;

const styles = StyleSheet.create({
  container: {
    width: 120,
    maxHeight: 120,
    borderRadius: 10,
    backgroundColor: '#1A1A1A',
    opacity: 0.7,
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12
  },
  imageView: {
    paddingTop: 30,
    alignItems: 'center',
  },
  textContainer: {
    height: 66,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 14
  },
  subTitle: {
    color: 'white',
    fontSize: 12,
    marginTop: 5
  }
});