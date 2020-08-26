import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

let store = new Vuex.Store ({
    state: {
        menuList: [],
    },
    
    mutations: {
        add (state, item) {
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
        },
        operate(state, msg) {
            switch (msg.act) {
                case 0: {
                    state.menuList.splice(msg.index, 1);
                    break;
                }
                case 1: {
                    state.menuList[msg.index].count++;
                    break;
                }
                case 2: {
                    if (!(--state.menuList[msg.index].count)) {
                        state.menuList.splice(msg.index, 1);
                        break;
                    }
                }
            }
        }
    }
});

export {store}