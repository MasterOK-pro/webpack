<template>
  <div>
    <div class="me-head" @click="getIn(info)">
      <p class="me-head-camera">
        <img class="end-header" src="../img/xiangji.png" alr="图片加载失败" />
      </p>
      <div class="page-item info">
        <img class="page-header info" :src="info.header" alr="头像加载失败" />
        <div class="page-text-box info">
          <div class="page-text info">
            <p class="page-text-head">
              <span class="page-name info">{{info.name}}</span>
            </p>
            <div class="page-short info">
              <span>{{info.id}}</span>
              <div class="page-short-end">
                <img class="page-short-end-img" src="../img/erweima.png" alr="图片加载失败" />
                <span class="page-short-end-span">&#xe670;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ul class="page-list discover">
      <li class="page-item">
        <img class="page-header" src="../img/zhifu.png" alr="头像加载失败" />
        <div class="page-text-box">
          <div class="page-text discover">
            <p class="page-text-head">
              <span class="page-name">支付</span>
            </p>
            <div class="page-text-end">
              <div class="end-header"></div>
              <span>&#xe670;</span>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <ul class="page-list discover">
      <li class="page-item">
        <img class="page-header" src="../img/shoucang.png" alr="头像加载失败" />
        <div class="page-text-box">
          <div class="page-text discover">
            <p class="page-text-head">
              <span class="page-name">收藏</span>
            </p>
            <div class="page-text-end">
              <div class="end-header"></div>
              <span>&#xe670;</span>
            </div>
          </div>
        </div>
      </li>
      <li class="page-item">
        <img class="page-header" src="../img/xiangce.png" alr="头像加载失败" />
        <div class="page-text-box">
          <div class="page-text discover">
            <p class="page-text-head">
              <span class="page-name">相册</span>
            </p>
            <div class="page-text-end">
              <div class="end-header"></div>
              <span>&#xe670;</span>
            </div>
          </div>
        </div>
      </li>
      <li class="page-item">
        <img class="page-header" src="../img/kabao.png" alr="头像加载失败" />
        <div class="page-text-box">
          <div class="page-text discover">
            <p class="page-text-head">
              <span class="page-name">卡包</span>
            </p>
            <div class="page-text-end">
              <div class="end-header"></div>
              <span>&#xe670;</span>
            </div>
          </div>
        </div>
      </li>
      <li class="page-item">
        <img class="page-header" src="../img/biaoqing.png" alr="头像加载失败" />
        <div class="page-text-box">
          <div class="page-text discover">
            <p class="page-text-head">
              <span class="page-name">表情</span>
            </p>
            <div class="page-text-end">
              <div class="end-header"></div>
              <span>&#xe670;</span>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <ul class="page-list discover">
      <li class="page-item">
        <img class="page-header" src="../img/shezhi.png" alr="头像加载失败" />
        <div class="page-text-box">
          <div class="page-text discover">
            <p class="page-text-head">
              <span class="page-name">设置</span>
            </p>
            <div class="page-text-end">
              <div class="end-header"></div>
              <span>&#xe670;</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const myInfo = {
    name: "OK",
    id: "unclekjmasterok",
    header: require("../img/me.png")
}
export default {
  data() {
    return {
      info: {}
    };
  },
  methods: {
    getIn(info) {
      this.$router.push("home/second?id=me-view");
      this.$emit("get-info-sub", info);
    }
  },
  created() {
    this.info = myInfo;
  }
};
</script>

<style>
</style>