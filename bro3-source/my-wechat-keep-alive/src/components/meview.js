const MeView = {
    props: ["bridge"],
    template: `
        <div class="me-view">
            <div class="me-view-head">
                <div class="me-view-head-left">
                    <span class="me-view-head-back" @click="goBack">&#xe663;</span>
                    <span class="me-view-head-name">个人信息</span>
                </div>
            </div>
            <div class="me-view-body">
                <ul class="page-list discover discover">
                    <li class="page-item">
                        <div class="page-text-box me">
                            <div class="page-text discover">
                                <p class="page-text-head">
                                    <span class="page-name">头像</span>
                                </p>
                                <div class="me page-text-end">
                                    <div class="me end-header">
                                        <img class="page-header" :src="bridge.header" alr="头像加载失败">
                                    </div>
                                    <span>&#xe670;</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="page-item">
                        <div class="page-text-box me">
                            <div class="page-text discover">
                                <p class="page-text-head">
                                    <span class="page-name">昵称</span>
                                </p>
                                <div class="me page-text-end">
                                    <div class="me end-header">
                                        <span>{{bridge.name}}</span>
                                    </div>
                                    <span>&#xe670;</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="page-item">
                        <div class="page-text-box me">
                            <div class="page-text discover">
                                <p class="page-text-head">
                                    <span class="page-name">微信号</span>
                                </p>
                                <div class="me page-text-end">
                                    <div class="me end-header">
                                        <span>{{bridge.id}}</span>
                                    </div>
                                    <span>&#xe670;</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="page-item">
                        <div class="page-text-box me">
                            <div class="page-text discover">
                                <p class="page-text-head">
                                    <span class="page-name">二维码名片</span>
                                </p>
                                <div class="me page-text-end">
                                    <div class="end-header me">
                                        <img src="./img/erweima.png" alr="图像加载失败">
                                    </div>
                                    <span>&#xe670;</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="page-item">
                        <div class="page-text-box me">
                            <div class="page-text discover">
                                <p class="page-text-head">
                                    <span class="page-name">更多</span>
                                </p>
                                <div class="page-text-end">
                                    <div class="end-header"></div>
                                    <span>&#xe670;</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul class="page-list discover discover">
                    <li class="page-item">
                        <div class="page-text-box">
                            <div class="page-text discover">
                                <p class="page-text-head">
                                    <span class="page-name">我的地址</span>
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
export {MeView}