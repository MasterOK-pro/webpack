<template>
  <div class="second-view">
    <component
      :is="activeMsg"
      @change-action-sec="changeAction"
      :bridge="bridge"
      :jokelist="jokelist"
    ></component>
  </div>
</template>

<script>
import ChatView from "./ChatView.vue";
import FriendView from "./FriendView.vue";
import MeView from "./MeView.vue";
import DiscoverView from "./DiscoverView.vue";
export default {
  data() {
    return {
      activeMsg: ""
    };
  },
  props: ["bridge", "jokelist"],
  components: {
    "chat-view": ChatView,
    "friend-view": FriendView,
    "me-view": MeView,
    "discover-view": DiscoverView
  },
  created() {
    this.activeMsg = this.$route.query.id;
    // console.log(this);
  },
  methods: {
    changeAction(msg) {
      this.$emit("change-action", msg);
    }
  },
  activated() {
    this.activeMsg = this.$route.query.id;
    console.log(this.$route.query);
  }
};
</script>

<style>
</style>