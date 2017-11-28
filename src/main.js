//首先第一步 就是将vue的包导入 
//注意：通过import导入的包 不是完整的包 组件不同通过普通方式注册 要通过render函数渲染组件
import Vue from "vue";
//导入路由 vue-router
import VueRouter from "vue-router";
//注册路由
Vue.use(VueRouter);
//导入 vue-resource
import VueResource from "vue-resource";
//注册VueResource
Vue.use(VueResource);
//配置全局请求的跟路径 
Vue.http.options.root = "http://vue.studyit.io";
//配置全局post提交时候的表单数据类型
Vue.http.options.emulateJSON = true;
//按需导入mint-ui中我们需要的的东西
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
//导入mui的css文件和js文件
import './lib/mui/css/mui.min.css';
//导入扩展图片的样式
import './lib/mui/css/icons-extra.css';


Vue.use(MintUI);
//导入路由
import router from "./router.js";

//将组件引入
import app from "./App.vue";




//路由实例
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router

})