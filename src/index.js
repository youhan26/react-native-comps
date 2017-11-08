/**
 * Created by youhan on 2017/10/13.
 */

module.exports = {
  //list
  get BaseList() {
    return require('./lists/BaseList').default;
  },
  get BaseSectionList() {
    return require('./lists/BaseSectionList').default;
  },
  
  //separator
  get LineSeparator() {
    return require('./separator/LineSeparator').default;
  },
  get SectionSeparator() {
    return require('./separator/SectionSeparator').default;
  },
  
  
  get RefreshControl() {
    return require('./refreshControl/RefreshControl').default;
  },
  
  // view
  get Card() {
    return require('./view/Card').default;
  },
  get KeyboardAvoidingScrollView() {
    return require('./view/KeyboardAvoidingScrollView').default;
  },
  
  //image
  get Image() {
    return require('./image/Image').default;
  },
  get Avatar() {
    return require('./image/Avatar').default;
  },
  get ZoomImage() {
    return require('./image/ZoomImage').default;
  },
  get AnimatedImage() {
    return require('./image/AnimatedImage').default;
  },
  
  
  //headers
  get FixHeader() {
    return require('./headers/FixHeader').default;
  },
  
  //color
  get COLOR() {
    return require('./asserts/colorConstant').default;
  },
  
  
  //Dropdown
  get Dropdown() {
    return require('./dropdown/Dropdown').default;
  },
  
  //input
  get InputWithLabel() {
    return require('./input/InputWithLabel').default;
  },
  
  //count
  get CountNum() {
    return require('./counter/CountNum').default;
  }
};
