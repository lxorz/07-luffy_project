import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'


//以后可以在组件中使用this.$router获取Router实例化对象
//路由信息对象this.$routes
import Home from '@/components/Home/Home';
import Course from '@/components/Course/Course';
import LightCourse from '@/components/LightCourse/LightCourse';
import Micro from '@/components/Micro/Micro';
import CourseDetail from '@/components/Course/CourseDetail';


Vue.use(Router)


//配置路由规则
export default new Router({
  linkActiveClass:'is-active',
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
      //component: HelloWorld
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/course',
      name:'Course',
      component:Course
    },
    {
      path:'/home/light-course',
      name:'LightCourse',
      component:LightCourse
    },
    {
      path:'/micro',
      name:'Micro',
      component:Micro
    },

    {
      path:"/course/detail/web/:detailId",
      name:"course.detail",
      component:CourseDetail
    }
  ]
})
