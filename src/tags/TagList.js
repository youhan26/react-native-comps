/**
 * Created by youhan on 2016/12/24.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import UTILS from '../../utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'flex-start',
    minHeight: 24
  },
  button: {
    backgroundColor: '#e6e6e6',
    marginRight: 4,
    marginBottom: 6,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 24
  },
  buttonText: {
    fontSize: 12,
    color: '#acacac',
    lineHeight: 24
  }
});

const TagList = (props) => {
  if (props.data.length <= 0) {
    return null;
  }
  return (
    <View style={[styles.container, props.style]}>
      {props.data.map((item) => {
        return (
          <TouchableOpacity
            key={`${item.name}key`}
            onPress={() => {
              UTILS.navigator.navigate('TagPage', {tagId: item.key});
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

TagList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  })),
};

TagList.defaultProps = {
  data: []
};

export default TagList;
