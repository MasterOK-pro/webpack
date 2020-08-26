import { store } from "./stores/menustate.js"

import order from "./module/Order.vue"
import hang from "./module/hang.vue"
import payed from "./module/Payed.vue"
import canceled from "./module/Canceled.vue"

import product from "./module/Product.vue"
import dfltMenu from "./module/DfltMenu.vue"

import "../css/menu.css"

import Vue from "vue"

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
    },

    created () {
        // console.log("index");
    }
});