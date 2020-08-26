import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);


let store = new Vuex.Store ({
    state: {
        // mains: [
        //     {
        //         text: "奥尔良鸡腿堡",
        //         price: 15,
        //         url: "../homework/images/aoerliangham.jpg"
        //     },
        //     {
        //         text: "鸡腿堡",
        //         price: 10,
        //         url: "../homework/images/jituiham.jpeg"
        //     },
        //     {
        //         text: "藤香鸡腿堡",
        //         price: 18,
        //         url: "../homework/images/hamburger.jpeg"
        //     },
        // ],
        
        // snacks: [
        //     {
        //         text: "大薯",
        //         price: 16,
        //         url: "../homework/images/shutiaoL.jpg"
        //     },
        //     {
        //         text: "中薯",
        //         price: 10,
        //         url: "../homework/images/shutiaoM.jpg"
        //     },
        //     {
        //         text: "小薯",
        //         price: 6,
        //         url: "../homework/images/shutiaoS.jpeg"
        //     },
        // ],
        
        // drinks: [
        //     {
        //         text: "可口可乐",
        //         price: 7,
        //         url: "../homework/images/coco.jpg"
        //     },
        //     {
        //         text: "芬达",
        //         price: 7,
        //         url: "../homework/images/fenda.jpg"
        //     },
        //     {
        //         text: "雪碧",
        //         price: 7,
        //         url: "../homework/images/spirit.jpeg"
        //     },
        // ],

        /* orderlist */
        menuList: [],
    },
    
    mutations: {
        add (state, item) {
            // console.log("in menustate add function start",state.menuList);
            let li = {
                text: '',
                count: 0,
                price: 0,
            };
            let flag = false; //商品重复标记

            li.text = item.text;
            if (state.menuList.length) {
                for (let i in state.menuList) {
                    flag = false;
                    if (state.menuList[i].text == item.text) {
                        li.count = state.menuList[i].count + 1;
                        li.price = item.price;
                        state.menuList.splice(i, 1, li);
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    li.count = 1;
                    li.price = item.price;
                    state.menuList.push(li);
                }
            } else {
                li.count = 1;
                li.price = item.price;
                state.menuList.push(li);
            }
            // console.log("in menustate add function end",state.menuList);
        },
        operate(state, msg) {
            // console.log(index, event);
            switch (msg.act) {
                /* 删除 */
                case 0: {
                    state.menuList.splice(msg.index, 1);
                    // console.log("删除");
                    break;
                }
                /* 添加 */
                case 1: {
                    state.menuList[msg.index].count++;
                    // console.log("添加");
                    break;
                }
                /* 减少 */
                case 2: {
                    if (!(--state.menuList[msg.index].count)) {
                        state.menuList.splice(msg.index, 1);
                        // console.log("减少");
                        break;
                    }
                }
            }
        }
    }
});

export {store}