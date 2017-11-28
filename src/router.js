//导入路由 vue-router
import VueRouter from "vue-router";
//导入组件
import homInfoSwiper from "./components/indexswipe.vue";
import member from "./components/member.vue";
import shopcar from "./components/shopcar.vue";
import search from "./components/search.vue";
import newlist from "./components/newlist/newlist.vue";
import newlistInfo from "./components/newlist/newlistinfo.vue";

const router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: homInfoSwiper },
        { path: "/member", component: member },
        { path: "/shopcar", component: shopcar },
        { path: "/search", component: search },
        { path: "/home/newlist", component: newlist },
        { path: "/home/newlist/newlistinfo/:id", component: newlistInfo }


    ],
    linkActiveClass: "mui-active", //给路由设置高亮样式

})

export default router;