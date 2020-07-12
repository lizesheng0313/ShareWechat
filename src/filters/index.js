import Vue from 'vue'
import filterSample from './sample'

Vue.filter('filterSample', filterSample)
//data时间转化
const resetDate = (val) => {
 return val?val.split(" ")[0]:""
};

export default {
  resetDate
}