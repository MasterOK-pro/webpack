/* delete  VueRouter创建组件需要的数据都导过来 */
import Home from "../components/Home.vue"
import Second from "../components/Second.vue"
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/home/second",
        component: Second
    },
]

const router = new VueRouter ({
    routes: routes
});

export {router};