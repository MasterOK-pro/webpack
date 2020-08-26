<template>
  <ul>
    <li class="todoItem" v-for="(item,index) in list" :key="'todo'+index">
      <span class="item">{{index+1}}:{{item}}</span>
      <button class="done" @click="subDoneIt(index)">完成</button>
      <button class="delete" @click="subDeleteIt(index)">删除</button>
      <!-- @click="deleteIt" -->
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.todoList;
    }
  },
  methods: {
    subDoneIt(index) {
      this.$store.commit("doneIt", index);
    },
    subDeleteIt(index) {
      this.$store.commit("deleteIt", { index: index, name: "todo" });
    }
  },
  watch: {
    list() {
      localStorage.setItem("todoList", JSON.stringify(this.list));
    }
  },
  created() {
    if (localStorage.getItem("todoList")) {
      console.log("todoList created with localstorage");
      this.$store.state.todoList = JSON.parse(localStorage.getItem("todoList"));
    }
    // console.log(this.$store);
  }
};
</script>

<style>
/* scoped不进不出 */
/* 待办列表 */
.todoList {
  padding: 5px;
  width: 289px;
}
</style>