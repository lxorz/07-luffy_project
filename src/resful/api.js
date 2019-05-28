import Axios from 'axios';
//Vue.prototype.$http=Axios;
Axios.defaults.baseURL = "https://www.luffycity.com/api/v1/";

//分类列表api
export const categoryList = () =>{
  return Axios.get('course_sub/category/list/').then(res=>res.data);
}
