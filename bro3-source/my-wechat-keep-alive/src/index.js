import {router} from "./router/router.js"

Vue.directive ("clickdown", {
    bind (el) {
        el.addEventListener ("mousedown", function(){
            el.classList.add("click-down");
        });
        el.addEventListener ("mouseup", function(){
            setTimeout(function(){
                el.classList.remove("click-down");
            },300);
        });
    }
});

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
        console.log(this,"index");
    },
    methods: {
        changeAction (msg) {
            this.action = msg.dirction;
            // if (msg.msg!=undefined) {
            //     this.activeMsg = msg.msg;
            // }
        },
        getInfo (info) {
            this.compInfo = info;
            // console.log(info,"index");          
        }
    },
    // directives: {
    //     clickdown: {
    //         bind (el) {
    //             el.addEventListener ("mousedown", function(){
    //                 el.classList.add("click-down");
    //             });
    //             el.addEventListener ("mouseup", function(){
    //                 setTimeout(function(){
    //                     el.classList.remove("click-down");
    //                 },300);
    //             });
    //         }
    //     }
    // }
});

export default App;