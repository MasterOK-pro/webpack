
const FriendView = {
    props: ["bridge"],
    template: `
        <div class="friend-view">
            <div class="friend-view-head">
                <div class="friend-view-head-left">
                    <span class="friend-view-head-back" @click="goBack">&#xe663;</span>
                    <span class="friend-view-head-name">{{bridge.name}}</span>
                </div>
                <div class="friend-view-head-right">
                    <span>. . .</span>
                </div>
            </div>
            <div class="friend-view-body">
                <div class="page-item info friend-head">
                    <img class="page-header info" :src="bridge.header" alr="头像加载失败">
                    <div class="page-text-box info">
                        <div class="page-text info">
                            <p class="page-text-head">
                                <span class="page-name info">{{bridge.name}}</span>
                            </p>
                            <div class="page-short info">
                                <span>微信号：{{bridge.id}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="page-list friend">
                    <li class="page-item friend">
                        <div class="page-text-box">
                            <div class="page-text discover">
                                <p class="page-text-head">
                                    <span class="page-name">设置备注和标签</span>
                                </p>
                                <div class="page-text-end friend">
                                    <span>&#xe670;</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="page-item friend">
                        <div class="page-text-box">
                            <div class="page-text discover">
                                <p class="page-text-head">
                                    <span class="page-name">朋友权限</span>
                                </p>
                                <div class="page-text-end friend">
                                    <span>&#xe670;</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="page-list friend">
                    <li class="page-item friend">
                        <div class="page-text-box">
                            <div class="page-text discover">
                                <p class="page-text-head">
                                    <span class="page-name">朋友圈</span>
                                </p>
                                <div class="page-text-end friend">
                                    <span>&#xe670;</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="page-item friend">
                        <div class="page-text-box">
                            <div class="page-text discover">
                                <p class="page-text-head">
                                    <span class="page-name">更多信息</span>
                                </p>
                                <div class="page-text-end friend">
                                    <span>&#xe670;</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="friend-sendmsg first">
                    <span>&#xe743;</span>
                    <span>发消息</span>
                </div>
                <div class="friend-sendmsg">
                    <span>&#xe60f;</span>
                    <span>音视频通话</span>
                </div>
            </div>
        </div>
    `,
    methods: {
        goBack () {
            this.$emit("change-action-sec",{dirction: "back", msg:"contact"});
            this.$router.go(-1);
        },
    }
}

export {FriendView}