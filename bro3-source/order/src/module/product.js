import {mains, drinks, snacks} from "../module/items.js"

export let product = {
    computed: {
        drinks () {
            // return this.$store.state.drinks;
            return drinks;
        },
        mains () {
            // return this.$store.state.mains;
            return mains;
        },
        snacks () {
            // return this.$store.state.snacks;
            return snacks;
        },
    },
    template:`
        <div class="dishArea">
            <div class="drink">
                <p class="dishtitle">饮料</p>
                <div class="itembox">
                    <div v-for="(item,index) of drinks" class="item">
                        <img :src="item.url" alt="">
                        <p>{{item.text}}{{item.price}}(元)</p>
                        <button @click="$store.commit('add', item)">点击添加</button>
                    </div>
                </div>
            </div>
            <div class="main">
                <p class="dishtitle">主食</p>
                <div class="itembox">
                    <div v-for="(item,index) of mains" class="item">
                        <img :src="item.url" alt="">
                        <p>{{item.text}}{{item.price}}(元)</p>
                        <button @click="$store.commit('add', item)">点击添加</button>
                    </div>
                </div>
            </div>
            <div class="snack">
                <p class="dishtitle">小食</p>
                <div class="itembox">
                    <div v-for="(item,index) of snacks" class="item">
                        <img :src="item.url" alt="">
                        <p>{{item.text}}{{item.price}}(元)</p>
                        <button @click="$store.commit('add', item)">点击添加</button>
                    </div>
                </div>
            </div>
        </div>
    `
}