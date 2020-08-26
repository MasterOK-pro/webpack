<template>
  <div class="dishArea">
    <div class="drink">
      <p class="dishtitle">饮料</p>
      <div class="itembox">
        <div v-for="(item,index) of drinks" class="item" :key="index">
          <img :src="getUrl(item.url)" alt />
          <p>{{item.text}}{{item.price}}(元)</p>
          <button @click="$store.commit('add', item)">点击添加</button>
        </div>
      </div>
    </div>
    <div class="main">
      <p class="dishtitle">主食</p>
      <div class="itembox">
        <div v-for="(item,index) of mains" class="item" :key="index">
          <img :src="getUrl(item.url)" alt />
          <p>{{item.text}}{{item.price}}(元)</p>
          <button @click="$store.commit('add', item)">点击添加</button>
        </div>
      </div>
    </div>
    <div class="snack">
      <p class="dishtitle">小食</p>
      <div class="itembox">
        <div v-for="(item,index) of snacks" class="item" :key="index">
          <img :src="getUrl(item.url)" alt />
          <p>{{item.text}}{{item.price}}(元)</p>
          <button @click="$store.commit('add', item)">点击添加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mains, drinks, snacks } from "./items.js";

export default {
  computed: {
    drinks() {
      // return this.$store.state.drinks;
      return drinks;
    },
    mains() {
      // return this.$store.state.mains;
      return mains;
    },
    snacks() {
      // return this.$store.state.snacks;
      return snacks;
    }
  },
  methods: {
    getUrl(msg) {
      return require(msg);
    }
  }
};
</script>

<style>
</style>