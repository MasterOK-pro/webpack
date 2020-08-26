const FriendList = [
    {
        name: "1",
        header: "./img/cat.jpg",
        id: "12384",
        mark: true
    },
    {
        name: "2",
        header: "./img/cat.jpg",
        id: "7777",
        mark: false
    },
    {
        name: "2",
        header: "./img/cat.jpg",
        id: "12384",
        mark: true
    },
    {
        name: "12",
        header: "./img/cat.jpg",
        id: "7777",
        mark: false
    },
    {
        name: "1",
        header: "./img/cat.jpg",
        id: "12384",
        mark: false
    },
    {
        name: "1",
        header: "./img/cat.jpg",
        id: "7777",
        mark: false
    },
    {
        name: "1",
        header: "./img/cat.jpg",
        id: "12384",
        mark: false
    },
    {
        name: "1",
        header: "./img/cat.jpg",
        id: "7777",
        mark: false
    },
    {
        name: "1",
        header: "./img/cat.jpg",
        id: "12384",
        mark: false
    },
    {
        name: "1",
        header: "./img/cat.jpg",
        id: "7777",
        mark: false
    },
    {
        name: "1",
        header: "./img/cat.jpg",
        id: "12384",
        mark: false
    },
];

const Contact = {
    template: `
        <div>
            <ul class="page-list" id="top">
                <li class="page-item">
                    <img class="page-header" src="./img/newf.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text contact">
                            <p class="page-text-head">
                                <span class="page-name">新的朋友</span>
                            </p>
                        </div>
                    </div>
                </li>
                <li class="page-item">
                    <img class="page-header" src="./img/group.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text contact">
                            <p class="page-text-head">
                                <span class="page-name">群聊</span>
                            </p>
                        </div>
                    </div>
                </li>
                <li class="page-item">
                    <img class="page-header" src="./img/tag.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text contact">
                            <p class="page-text-head">
                                <span class="page-name">标签</span>
                            </p>
                        </div>
                    </div>
                </li>
                <li class="page-item">
                    <img class="page-header" src="./img/public.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text contact">
                            <p class="page-text-head">
                                <span class="page-name">公众号</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <p class="group-title">我的企业及企业联系人</p>
            <ul class="page-list">
                <li class="page-item">
                    <img class="page-header" src="./img/company.png" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text contact">
                            <p class="page-text-head">
                                <span class="page-name">企业微信联系人</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <p class="group-title" id="star">星标朋友</p>
            <ul class="page-list">
                <li class="page-item" v-for="item in markList" @click="getIn(item)">
                    <img class="page-header" :src="item.header" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text contact">
                            <p class="page-text-head">
                                <span class="page-name">{{item.name}}</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <p class="group-title" id="num1">1</p>
            <ul class="page-list">
                <li class="page-item" v-for="item in friendList">
                    <img class="page-header" :src="item.header" alr="头像加载失败">
                    <div class="page-text-box">
                        <div class="page-text contact">
                            <p class="page-text-head">
                                <span class="page-name">{{item.name}}</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <p class="group-title" id="num2">2</p>
            <div class="contact-right-gid-box">
                <div>
                    <a href="#top">&#xe6b4;</a>
                    <a href="#star">※</a>
                    <a href="#num1">1</a>
                    <a href="#num2">2</a>
                </div>
            </div>
        </div>
    `,
    data () {
        return {
            pageName: "通讯录",
            list: []
        }
    },
    created () {
        this.list = FriendList;
    },
    methods: {
        listSort (mark) {
            let list = [];
            if (mark) {
                for (let item of this.list) {
                    if (item.mark) {
                        list.push(item);
                    }
                }
                list.sort(function(a, b){
                    return a.name-b.name;
                });
            } else {
                for (let item of this.list) {
                    if (!item.mark) {
                        list.push(item);
                    }
                }
                list.sort(function(a, b){
                    return a.name-b.name;
                });
            }
            return list;
        },
        getIn (info) {
            this.$router.push("home/second?id=friend-view");
            this.$emit("get-info-sub", info);
        }
    },
    computed: {
        markList () {
            return this.listSort(true);
        },
        friendList () {
            return this.listSort(false);
        }
    }
}

export {Contact, FriendList}