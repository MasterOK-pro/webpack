import {router} from "./router/router.js"
import "./css/home.css"
import "./font/iconfont.css"
import "./css/page-list.css"
import "./css/second-view.css"
import "./css/friend-circle.css"
import Vue from "vue"

const App = new Vue ({
    el: "#app",
    data: {
        compInfo: "",
        action: "",
        activeMsg: "",
        jokeList: []
    },
    router: router,
    created () {
        this.$router.push("home");
        let that = this;
        let xhr = new XMLHttpRequest();
        let url = "https://api.apiopen.top/getJoke?page=1&count=10&type=image";
        xhr.open("GET",url);
        xhr.send();
        xhr.onload = function () {
            that.jokeList = JSON.parse(xhr.response).result;
        };
        // console.log(this,"index");
    },
    methods: {
        changeAction (msg) {
            this.action = msg.dirction;
            if (msg.msg!=undefined) {
                this.activeMsg = msg.msg;
            }
        },
        getInfo (info) {
            this.compInfo = info;
            // console.log(info,"index");          
        }
    }
});

export default App;