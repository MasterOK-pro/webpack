<template>
  <ul class="listArea">
    <li class="listItem">
      <p class="name">商品名称</p>
      <p class="count">数量</p>
      <p class="price">价格</p>
      <p class="opration">操作</p>
    </li>

    <li class="listItem" v-for="(item,index) of list" :key="index">
      <p class="name">{{item.text}}</p>
      <p class="count">{{item.count}}</p>
      <p class="price">{{item.price}}</p>
      <p class="opration btns">
        <a href @click.prevent="$store.commit('operate', {act:0, index:index})">删除</a>
        <a href @click.prevent="$store.commit('operate', {act:1, index:index})">+</a>
        <a href @click.prevent="$store.commit('operate', {act:2, index:index})">-</a>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    list() {
      if (this.$store.state.menuList) {
        console.log("in order component true", this.$store.state.menuList);
        return this.$store.state.menuList;
      } else {
        console.log("in order component false", this.$store.state.menuList);
        return [];
      }
    }
  }
};
</script>

<style>
</style>