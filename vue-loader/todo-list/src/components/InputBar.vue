<template>
  <div class="inputBar">
    <input type="text" placeholder="请在此输入事件" v-model.trim="msg" />
    <button class="add" @click="subAddItem">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    subAddItem() {
      // console.log(this.$store,"inputBar");
      this.$store.commit("add", this.msg);
      this.msg = "";
    }
  }
};
</script>

<style scoped>
.inputBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inputBar input {
  font-size: 18px;
  flex-grow: 1;
  outline: none;
  margin: 5px;
  padding: 3px;
  border: none;
  border-radius: 3px;
}
.inputBar button {
  font-size: 18px;
  margin: 5px;
  padding: 3px;
  background-color: rgb(0, 204, 255);
  color: white;
  border: none;
  outline: none;
  border-radius: 3px;
}
</style>