/* delete  VueRouter创建组件需要的数据都导过来 */
import {Home} from "../components/home.js"
import {Second} from "../components/second.js"

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