<template>
  <ul class="page-list">
    <li class="page-item" v-for="(item, index) of list" @click="getIn(item)" v-clickdown :key="'item'+index">
      <img class="page-header" :src="item.header" alr="头像加载失败" />
      <div class="page-text-box">
        <div class="page-text">
          <p class="page-text-head">
            <span class="page-name">{{item.name}}</span>
            <span class="page-time">{{item.time}}</span>
          </p>
          <p class="page-short">{{lastMsg(item.content)}}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {chatFullList} from './chatlist'
export default {
    data () {
        return {
            list: [],
        }
    },
    methods: {
        lastMsg (msgArr) {
            let msgObj = msgArr[msgArr.length-1];
            return Object.values(msgObj)[0];
        },
        getIn (info) {
            this.$router.push("home/second?id=chat-view");
            this.$emit("get-info-sub", info);
        }
    },
    created () {
        this.list = chatFullList;
    }
};
</script>

<style>
</style>