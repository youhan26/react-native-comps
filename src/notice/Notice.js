import {DeviceEventEmitter} from 'react-native';


export const noticeComponent = {
  native: 1,
  global_square: 2,
  square: 3,
  dropDown: 4
};

export const noticeTypes = {
  info: 'info',
  warn: 'warn',
  success: 'success',
  fail: 'fail',
  loading: 'loading'
};

export default class Notice {
  static DropDown = {
    /**
     * @param data
     * @param type
     * @param interval
     */
    show: (data, type, interval) => {
      Notice.show(noticeComponent.dropDown, type, data, interval);
    },
    close: () => {
      Notice.close();
    }
  };
  static Square = {
    /**
     * @param data
     * @param type
     * @param interval
     */
    show: (data, type, interval) => {
      Notice.show(noticeComponent.square, type, data, interval);
    },
    close: () => {
      Notice.close();
    }
  };
  static BlockSquare = {
    /**
     * @param data
     * @param type
     * @param interval
     */
    show: (data, type, interval) => {
      Notice.show(noticeComponent.global_square, type, data, interval);
    },
    close: () => {
      Notice.close();
    }
  };
  
  /**
   * @param type
   * @param noticeType
   * @param title
   * @param subTitle
   * @param icon
   * @param interval
   */
  static show(type, noticeType, {title, subTitle, icon}, interval = 0){
    DeviceEventEmitter.emit('$notice-show', {
      data: {
        type, title, subTitle, icon, noticeType
      },
      interval,
    });
  }
  static close(){
    DeviceEventEmitter.emit('$notice-close');
  }
  
  static Types = noticeTypes;
}