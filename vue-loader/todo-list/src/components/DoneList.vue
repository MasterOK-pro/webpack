<template>
  <ul>
    <li class="doneItem" v-for="(item,index) in list" :key="'todo'+index">
      <span class="item">{{index+1}}:{{item}}</span>
      <button class="delete" @click="subDeleteIt(index)">删除</button>
      <!-- @click="deleteIt" -->
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.doneList;
    }
  },
  methods: {
    subDeleteIt(index) {
      this.$store.commit("deleteIt", { index: index, name: "done" });
    }
  },
  watch: {
    list() {
      localStorage.setItem("doneList", JSON.stringify(this.list));
    }
  },
  created() {
    if (localStorage.getItem("doneList")) {
      this.$store.state.doneList = JSON.parse(localStorage.getItem("doneList"));
    }
  }
};
</script>

<style>
.doneList {
  width: 289px;
  padding: 5px;
}
</style>