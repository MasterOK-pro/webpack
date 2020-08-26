import { store } from "./stores/menustate.js"

import { order } from "./module/order.js"
import { hang } from "./module/hang.js"
import { payed } from "./module/payed.js"
import { canceled } from "./module/canceled.js"

import { product } from "./module/product.js"
import { dfltMenu } from "./module/dfltMenu.js"

let app = new Vue({
    el: "#app",
    data: {
        leftView: 'order',
        rightView: 'product',
    },
    store,
    components: {
        order: order,
        hang: hang,
        payed: payed,
        canceled: canceled,

        product: product,
        dfltMenu: dfltMenu
    },

    methods: {
        chageOrder(event) {
            let msg = event.target.innerHTML;
            switch (msg) {
                case '当前订单': {
                    this.leftView = 'order';
                    break;
                }
                case '挂单中': {
                    this.leftView = 'hang';
                    break;
                }
                case '已付款': {
                    this.leftView = 'payed';
                    break;
                }
                case '取消的订单': {
                    this.leftView = 'canceled';
                    break;
                }
            }
        },
        changeProd(event) {
            let msg = event.target.innerHTML;
            switch (msg) {
                case '常点食品': {
                    this.rightView = 'product';
                    break;
                }
                case '主菜单': {
                    this.rightView = 'dfltMenu';
                    break;
                }
            }
        },
    }
});