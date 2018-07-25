import {DeviceEventEmitter} from "react-native";

function show(option, callback){
  DeviceEventEmitter.emit('$animate-show', option, callback);
}
function close(callback){
  DeviceEventEmitter.emit('$animate-close', callback);
}

export default {
  show,
  close
};
