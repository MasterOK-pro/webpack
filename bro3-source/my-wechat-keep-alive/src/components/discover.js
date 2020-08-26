const DiscoverList = {
    props: ["jokelist"],
    methods: {
        getIn () {
            this.$router.push("home/second?id=discover-view");
        }
    },
    template: `
        <div>
            <ul class="page-list">
                <li class="page-item" v-clickdown>
                    <img class="page-header" src="./img/pyquan.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text discover" @click="getIn">
                            <p class="page-text-head">
                                <span class="page-name">朋友圈</span>
                            </p>
                            <div class="page-text-end">
                                <img class="end-header" :src="jokelist[0].header" alr="头像加载失败">
                                <span>&#xe670;</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <ul class="page-list discover">
                <li class="page-item">
                    <img class="page-header" src="./img/sao.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text discover">
                            <p class="page-text-head">
                                <span class="page-name">扫一扫</span>
                            </p>
                            <div class="page-text-end">
                                <div class="end-header"></div>
                                <span>&#xe670;</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="page-item">
                    <img class="page-header" src="./img/yao.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text discover">
                            <p class="page-text-head">
                                <span class="page-name">摇一摇</span>
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
                    <img class="page-header" src="./img/kan.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text discover">
                            <p class="page-text-head">
                                <span class="page-name">看一看</span>
                            </p>
                            <div class="page-text-end">
                                <div class="end-header"></div>
                                <span>&#xe670;</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="page-item">
                    <img class="page-header" src="./img/sou.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text discover">
                            <p class="page-text-head">
                                <span class="page-name">搜一搜</span>
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
                    <img class="page-header" src="./img/fujin.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text discover">
                            <p class="page-text-head">
                                <span class="page-name">附近的人</span>
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
                    <img class="page-header" src="./img/gouwu.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text discover">
                            <p class="page-text-head">
                                <span class="page-name">购物</span>
                            </p>
                            <div class="page-text-end">
                                <div class="end-header"></div>
                                <span>&#xe670;</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="page-item">
                    <img class="page-header" src="./img/youxi.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text discover">
                            <p class="page-text-head">
                                <span class="page-name">游戏</span>
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
                    <img class="page-header" src="./img/xiaochengxu.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text discover">
                            <p class="page-text-head">
                                <span class="page-name">小程序</span>
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
    `,
    created () {

    }
}

export {DiscoverList}