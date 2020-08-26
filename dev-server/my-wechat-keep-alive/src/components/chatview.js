const ChatView = {
    props: ["bridge"],
    template: `
        <div class="chat-view">
            <div class="chat-view-head">
                <div class="chat-view-head-left">
                    <span class="chat-view-head-back" @click="goBack">&#xe663;</span>
                    <span class="chat-view-head-name">{{bridge.name}}</span>
                </div>
                <div class="chat-view-head-right">
                    <span>. . .</span>
                </div>
            </div>
            <div class="chat-view-body">
                <ul class="chat-content" v-for="item of bridge.content">
                    <li class="chat-item" :class="{'is-mine':Object.keys(item)[0]=='me'}">
                        <img class="page-header" :src="getHeader(item)" alr="头像加载失败">
                        <p class="chat-msg">{{Object.values(item)[0]}}</p>
                        <div class="page-header"></div>
                    </li>
                </ul>
            </div>
            <div class="chat-view-end">
                <span>&#xe68e;</span>
                <input type="text">
                <span>&#xe643;</span>
                <span>&#xe64c;</span>
            </div>
        </div>
    `,
    methods: {
        goBack () {
            this.$emit("change-action-sec",{dirction: "back"});
            this.$router.go(-1);
        },
        getHeader (item) {
            if (Object.keys(item)[0]!='me') {
                return this.bridge.header;
            } else {
                return "./img/me.png";
            }
        }
    }
}
export {ChatView}