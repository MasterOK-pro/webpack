const DiscoverView = {
    props: ["bridge", "jokelist"],
    created () {
        // console.log(jokeList);
        
    },
    template: `
        <div class="discover-view">
            <div class="discover-view-head">
                <div class="discover-view-head-left">
                    <span class="discover-view-head-back" @click="goBack">&#xe663;</span>
                    <span class="discover-view-head-name">朋友圈</span>
                </div>
                <div class="discover-view-head-right">
                    <img class="page-header" src="./img/xiangji.png" alr="头像加载失败">
                </div>
            </div>
            <div class="discover-view-body">
                <div class="discover-view-body-head">
                    <div class="discover-view-body-head-end">
                        <div>
                            <span>OK</span>
                            <img class="page-header" src="./img/me.png" alr="头像加载失败">
                        </div>
                    </div>
                </div>

                <div v-for="item in jokelist" class="joke">
                    <div class="container">
                        <div class="left">
                            <img :src="item.header" alt="" class="header">
                        </div>
                        <div class="right text">
                            <p>{{item.text}}</p>
                            <a href="" class="name">{{item.name}}</a>
                        </div>
                    </div>
                    <div class="container">
                        <div class="left"></div>
                        <div class="right">
                            <img :src="item.images" alt="">
                            <div class="detail">
                                <div class="time">{{item.passtime}}</div>
                                <div>
                                    <span class="up">点赞 {{item.up}}</span>
                                    <span class="down">不点赞 {{item.down}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `,
    methods: {
        goBack () {
            this.$emit("change-action-sec",{dirction: "back", msg:"discovery"});
            this.$router.go(-1);
        },
    }
}
export {DiscoverView}