import React, {PureComponent} from 'react';
import {DeviceEventEmitter} from 'react-native';
import SquareNoticeWithBlock from "./SquareNoticeWithBlock";
import DropDownNotice from "./DropDownNotice";
import {noticeComponent} from "./Notice";
import SquareNotice from "./SquareNotice";

/**
 * Notice
 */
class NoticeView extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      showNotice: false,
      data: null,
      showDropDown: false,
      interval: 0,
    };
    
    this.closeNotice = this.closeNotice.bind(this);
    this.showNotice = this.showNotice.bind(this);
  }
  
  componentDidMount() {
    DeviceEventEmitter.addListener('$notice-show', this.showNotice);
    DeviceEventEmitter.addListener('$notice-close', this.closeNotice);
  }
  
  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('$notice-show');
    DeviceEventEmitter.removeAllListeners('$notice-close');
  }
  
  closeNotice() {
    this.setState({showNotice: false, data: null});
  }
  
  showNotice(options) {
    const {data, interval, callback} = options;
    
    if (this.interval) {
      clearTimeout(this.interval);
    }
    
    if (interval) {
      this.interval = setTimeout(() => {
        this.closeNotice();
        if (callback && typeof callback === 'function') {
          callback();
        }
      }, interval);
    }
    
    this.setState({showNotice: true, data, interval});
  }
  
  render() {
    const {showNotice, data, interval} = this.state;
    
    if (!showNotice || !data) {
      return null;
    }
    
    const {type, title, subTitle, icon, noticeType} = data;
    const newData = {
      icon,
      title,
      subTitle,
      noticeType
    };
    
    switch (type) {
      case noticeComponent.square: {
        return <SquareNotice data={newData} />;
      }
      case noticeComponent.global_square: {
        return <SquareNoticeWithBlock data={newData} />;
      }
      case noticeComponent.dropDown: {
        return <DropDownNotice data={newData} interval={interval} />;
      }
    }
  }
}

export default NoticeView;